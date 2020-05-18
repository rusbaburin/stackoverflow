import { createStore, combineReducers } from 'redux';
import { results } from './results/reducers';

export const store = createStore(
    combineReducers({ results })
)