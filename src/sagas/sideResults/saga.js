import { takeEvery, put, select } from 'redux-saga/effects';

import { getTagPosts, getUserPosts } from '../../services/client';
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

export const getUserResultsAsync = (userId) => ({
    type: SAGA_TYPE.GET_USER_RESULTS_ASYNC,
    userId
})

export const getTagResultsAsync = (tag) => ({
    type: SAGA_TYPE.GET_TAG_RESULTS_ASYNC,
    tag
})

function* fetchTagResults(action) {
    yield put(replaceSideResults()); //clearup
    yield put(setSideResultsLoading(true));
    yield put(setSideResultsError(false));

    const methodName = action.type == SAGA_TYPE.GET_TAG_RESULTS_ASYNC ? getTagPosts : getUserPosts;
    const methodParam = action.type == SAGA_TYPE.GET_TAG_RESULTS_ASYNC ? action.tag : action.userId;

    try {
        const response = yield methodName(methodParam);
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
    yield takeEvery(SAGA_TYPE.GET_USER_RESULTS_ASYNC, fetchTagResults);
}