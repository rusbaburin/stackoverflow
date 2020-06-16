import { takeEvery, put, select } from 'redux-saga/effects';

import { getResults } from '../../services/client';
import { SAGA_TYPE } from '../../common/constants';
import {
  replaceResults,
  addResults,
  setResultsLoading,
  setResultsHasmore,
  setResultsError,
} from '../../store/results/actions';
import { setTitle } from '../../store/title/actions';
import { SortType } from '../../types/constants';
import { ISortResultsAsync, IGetResultsAsync, IAddResultsAsync } from '../../types/saga';

export const addResultsAsync = (): IAddResultsAsync => ({
  type: SAGA_TYPE.ADD_RESULTS_ASYNC,
});

export const getResultsAsync = (title: string): IGetResultsAsync => ({
  type: SAGA_TYPE.GET_RESULTS_ASYNC,
  title,
});

export const sortResultsAsync = (sort: SortType): ISortResultsAsync => ({
  type: SAGA_TYPE.SORT_RESULTS_ASYNC,
  sort,
});

function* fetchResults(action: ISortResultsAsync | IGetResultsAsync | IAddResultsAsync) {
  const { type } = action;
  const state = yield select();

  const page = +(type != SAGA_TYPE.ADD_RESULTS_ASYNC) || state.results.page + 1;
  const sort = (action as ISortResultsAsync).sort || state.results.sort;
  const title = (action as IGetResultsAsync).title || state.title;

  if (type == SAGA_TYPE.GET_RESULTS_ASYNC || type == SAGA_TYPE.SORT_RESULTS_ASYNC) {
    yield put(replaceResults());
  } // clearup

  yield put(setResultsLoading(true));
  yield put(setResultsHasmore(null));
  yield put(setResultsError(false));

  try {
    const response = yield getResults(title, page, sort);
    yield put(setResultsHasmore(response.has_more));

    switch (type) {
      case SAGA_TYPE.GET_RESULTS_ASYNC:
        yield put(setTitle(title));
        yield put(replaceResults(response.items, page, sort));
        break;
      case SAGA_TYPE.ADD_RESULTS_ASYNC:
        yield put(addResults(response.items, page, sort));
        break;
      case SAGA_TYPE.SORT_RESULTS_ASYNC:
        yield put(replaceResults(response.items, page, sort));
        break;
      default:
        yield put(replaceResults()); // clearup
    }
  } catch (err) {
    console.error(err);
    yield put(setResultsError(true));
  }

  yield put(setResultsLoading(false));
}

export function* watchGetResults() {
  yield takeEvery(SAGA_TYPE.GET_RESULTS_ASYNC, fetchResults);
  yield takeEvery(SAGA_TYPE.ADD_RESULTS_ASYNC, fetchResults);
  yield takeEvery(SAGA_TYPE.SORT_RESULTS_ASYNC, fetchResults);
}
