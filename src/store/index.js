import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'

import { results } from './results/reducers';
import { sideResults } from './sideResults/reducers';
import { title } from './title/reducers';
import { question } from './question/reducers';

import { watchGetResults } from '../sagas/results/saga';
import { watchGetSideResults } from '../sagas/sideResults/saga';
import { watchGetQuestion } from '../sagas/question/saga';

function* rootSaga() {
    yield all([
        watchGetResults(),
        watchGetSideResults(),
        watchGetQuestion()
    ])
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({ results, title, sideResults, question }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);