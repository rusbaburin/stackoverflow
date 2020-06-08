import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { results } from './results/reducers';
import { sideResults } from './sideResults/reducers';
import { title } from './title/reducers';

import { watchGetResults } from '../sagas/results/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({ results, title, sideResults }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchGetResults);