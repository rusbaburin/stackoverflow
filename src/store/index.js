import { createStore, combineReducers } from 'redux';

import { results } from './results/reducers';
import { title } from './title/reducers';

export const store = createStore(
    combineReducers({ results, title })
)