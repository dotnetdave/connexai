import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga'
import * as Increment from '../reducer/incrementReducer';
import * as Project from '../reducer/projectsReducer';


export default function configureStore(history, initialState) {
   
    //Saga
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    //Reducers
    const reducers = {
        counter: Increment.reducer,
        project: Project.reducer
    };
    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    // Run the Sagas
    sagaMiddleware.run(rootSaga)

    return store;
}
