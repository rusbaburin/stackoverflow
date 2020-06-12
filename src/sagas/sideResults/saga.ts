import { takeEvery, put, select } from 'redux-saga/effects';

import { getTagPosts, getUserPosts } from '../../services/client';
import { SAGA_TYPE, SORT, SIDEBAR_TYPE } from '../../common/constants';
import {
    setSideResultsLoading,
    setSideResultsError,
    replaceSideResults
} from '../../store/sideResults/actions';
import { SortType } from '../../types/constants';
import { ISortSideResultsAsync, IGetTagResultsAsync, IGetUserResultsAsync } from '../../types/saga';

export const getUserResultsAsync = (userId: number): IGetUserResultsAsync => ({
    type: SAGA_TYPE.GET_USER_RESULTS_ASYNC,
    userId
})

export const getTagResultsAsync = (tag: string): IGetTagResultsAsync => ({
    type: SAGA_TYPE.GET_TAG_RESULTS_ASYNC,
    tag
})

export const sortSideResultsAsync = (sort: SortType): ISortSideResultsAsync => ({
    type: SAGA_TYPE.SORT_SIDERESULTS_ASYNC,
    sort
})

function* fetchSideResultsToSort(action: ISortSideResultsAsync) {
    const { sideResults } = yield select();
    const sort = action.sort || SORT.ACTIVITY;

    if (sideResults.group == SIDEBAR_TYPE.TAG) {
        yield put(replaceSideResults(sideResults.items, sort, SIDEBAR_TYPE.TAG));
        return;
    }

    if (sideResults.items.length == 0) {
        yield put(replaceSideResults()); //clearup
        return;
    }

    const userId = sideResults.items[0].owner.user_id;

    yield put(replaceSideResults()); //clearup
    yield put(setSideResultsLoading(true));
    yield put(setSideResultsError(false));

    try {
        const response = yield getUserPosts(userId, sort);
        const questions = response.items;
        yield put(replaceSideResults(questions, sort, SIDEBAR_TYPE.USER));
    } catch (err) {
        console.error(err);
        yield put(setSideResultsError(true));
    }

    yield put(setSideResultsLoading(false));
}

function* fetchSideResults(action: IGetTagResultsAsync | IGetUserResultsAsync) {
    yield put(replaceSideResults()); //clearup
    yield put(setSideResultsLoading(true));
    yield put(setSideResultsError(false));

    const sort = SORT.ACTIVITY;
    const group = action.type == SAGA_TYPE.GET_TAG_RESULTS_ASYNC ? SIDEBAR_TYPE.TAG : SIDEBAR_TYPE.USER;

    try {
        const response = yield action.type == SAGA_TYPE.GET_TAG_RESULTS_ASYNC ? getTagPosts(action.tag) : getUserPosts(action.userId);
        const questions = response.items;
        yield put(replaceSideResults(questions, sort, group));
    } catch (err) {
        console.error(err);
        yield put(setSideResultsError(true));
    }

    yield put(setSideResultsLoading(false));
}

export function* watchGetSideResults() {
    yield takeEvery(SAGA_TYPE.GET_TAG_RESULTS_ASYNC, fetchSideResults);
    yield takeEvery(SAGA_TYPE.GET_USER_RESULTS_ASYNC, fetchSideResults);
    yield takeEvery(SAGA_TYPE.SORT_SIDERESULTS_ASYNC, fetchSideResultsToSort);
}