import { takeEvery, put } from 'redux-saga/effects';

import { getResults } from '../../services/client';
import { SAGA_TYPE } from '../../common/constants';
import {
    replaceResults,
    setResultsLoading,
    setResultsHasmore,
    setResultsError
} from '../../store/results/actions';
import { setTitle } from '../../store/title/actions';

export const replaceResultsAsync = (title, page, sort) => ({
    type: SAGA_TYPE.REPLACE_RESULTS_ASYNC,
    title,
    page,
    sort
})

function* fetchResults(action) {
    const { title, page, sort } = action;

    yield put(setResultsLoading(true));
    yield put(setResultsHasmore(null));
    yield put(setResultsError(false));

    try {
        const response = yield getResults(title, page, sort);
        yield put(setTitle(title));
        yield put(setResultsHasmore(response.has_more));
        yield put(replaceResults(response.items, page, sort));
    } catch (err) {
        console.error(err);
        yield put(setResultsError(true));
    }

    yield put(setResultsLoading(false));
}

export function* watchGetResults() {
    yield takeEvery(SAGA_TYPE.REPLACE_RESULTS_ASYNC, fetchResults);
}