import { all, delay, put, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_INCREMENT, INCREMENT, REQUEST_GET_PROJECTS, GET_PROJECTS } from '../actions/actionConstants';

export default function* () {
    yield all([
        watchIncrementAsync(),
        watchGetProjectsAsync()
    ]);
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
    const json = yield fetch('/api/projects/all').then(response => response.json());
    yield put({ type: GET_PROJECTS, projects: json.projects });
}

