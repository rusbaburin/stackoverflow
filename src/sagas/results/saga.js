import { takeEvery, put } from 'redux-saga/effects';

import { getResults } from '../../services/client';
import { SAGA_TYPE } from '../../common/constants';
import {
    replaceResults,
    addResults,
    setResultsLoading,
    setResultsHasmore,
    setResultsError
} from '../../store/results/actions';
import { setTitle } from '../../store/title/actions';

export const addResultsAsync = (title, page, sort) => ({
    type: SAGA_TYPE.ADD_RESULTS_ASYNC,
    title,
    page,
    sort
})

export const replaceResultsAsync = (title, page, sort) => ({
    type: SAGA_TYPE.REPLACE_RESULTS_ASYNC,
    title,
    page,
    sort
})

function* fetchResults(action) {
    const { title, page, sort, type } = action;

    yield put(setResultsLoading(true));
    yield put(setResultsHasmore(null));
    yield put(setResultsError(false));

    try {
        const response = yield getResults(title, page, sort);
        yield put(setTitle(title));
        yield put(setResultsHasmore(response.has_more));

        switch(type) {
            case SAGA_TYPE.REPLACE_RESULTS_ASYNC :
                yield put(replaceResults(response.items, page, sort));
                break;
            case SAGA_TYPE.ADD_RESULTS_ASYNC :
                yield put(addResults(response.items, page, sort));
                break;
            default :
                yield put(replaceResults()); //clearup
        }   

    } catch (err) {
        console.error(err);
        yield put(setResultsError(true));
    }

    yield put(setResultsLoading(false));
}

export function* watchGetResults() {
    yield takeEvery(SAGA_TYPE.REPLACE_RESULTS_ASYNC, fetchResults);
    yield takeEvery(SAGA_TYPE.ADD_RESULTS_ASYNC, fetchResults);
}