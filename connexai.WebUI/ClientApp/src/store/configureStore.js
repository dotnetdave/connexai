import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga'
import * as Increment from '../reducer/incrementReducer';
import * as Project from '../reducer/projectsReducer';
import { createLogger } from 'redux-logger'


export default function configureStore(history, initialState) {



    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    //reducers
    const reducers = {
        counter: Increment.reducer,
        project: Project.reducer
    };

    //build the root reducer
    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    //create the saga middleware
    const sagaMiddleware = createSagaMiddleware();


    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    if (process.env.NODE_ENV === `development`) {
        const logger = createLogger({
            // ...options
            collapsed: (getState, action, logEntry) => !logEntry.error
        });

        middleware.push(logger);
    }

    //create store
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    // run the sagas
    sagaMiddleware.run(rootSaga);

    return store;
}
