import { takeEvery, put, select } from 'redux-saga/effects';

import { getTagPosts } from '../../services/client';
import { SAGA_TYPE, SORT, SIDEBAR_TYPE } from '../../common/constants';
import {
    replaceResults,
    addResults,
    setResultsLoading,
    setResultsHasmore,
    setResultsError
} from '../../store/results/actions';
import { setTitle } from '../../store/title/actions';
import {
    setSideResultsLoading,
    setSideResultsError,
    replaceSideResults
} from '../../store/sideResults/actions';

export const getTagResultsAsync = (tag) => ({
    type: SAGA_TYPE.GET_TAG_RESULTS_ASYNC,
    tag
})

function* fetchTagResults(action) {
    yield put(replaceSideResults()); //clearup
    yield put(setSideResultsLoading(true));
    yield put(setSideResultsError(false));

    try {
        const response = yield getTagPosts(action.tag);
        const questions = response.items;
        yield put(replaceSideResults(questions, SORT.ACTIVITY, SIDEBAR_TYPE.TAG));
    } catch (err) {
        console.error(err);
        yield put(setSideResultsError(true));
    }

    yield put(setSideResultsLoading(false));
}

export function* watchGetSideResults() {
    yield takeEvery(SAGA_TYPE.GET_TAG_RESULTS_ASYNC, fetchTagResults);
}