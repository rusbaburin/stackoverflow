import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'

import { results } from './results/reducers';
import { sideResults } from './sideResults/reducers';
import { title } from './title/reducers';

import { watchGetResults } from '../sagas/results/saga';
import { watchGetSideResults } from '../sagas/sideResults/saga';

function* rootSaga() {
    yield all([
        watchGetResults(),
        watchGetSideResults()
    ])
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({ results, title, sideResults }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);