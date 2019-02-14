import { all, delay, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_INCREMENT, INCREMENT, REQUEST_GET_PROJECTS, GET_PROJECTS } from '../actions/actionConstants';

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchGetProjectsAsync()
    ])
}

export function* watchIncrementAsync() {
    yield takeLatest(REQUEST_INCREMENT, incrementAsync);
}

export function* incrementAsync() {
    yield delay(2000);
    yield put({ type: INCREMENT });
}

export function* watchGetProjectsAsync() {
    yield takeLatest(REQUEST_GET_PROJECTS, getProjectsAsync);
}

export function* getProjectsAsync() {
    yield delay(1000);
    var projects = [{ name: 'Dave' }, { name: 'Ann' }, { name: 'Fred' }];
    console.log(projects);
    yield put({ type: GET_PROJECTS, projects: projects });
}

