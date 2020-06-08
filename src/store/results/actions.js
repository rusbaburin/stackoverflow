import { ACTION_TYPE, SORT } from '../../common/constants';

export const replaceResults = (items = [], page = 0, sort = SORT.ACTIVITY) => ({
    type: ACTION_TYPE.REPLACE_RESULTS,
    items,
    page,
    sort
});

export const addResults = (items = [], page = 0, sort = SORT.ACTIVITY) => ({
    type: ACTION_TYPE.ADD_RESULTS,
    items,
    page,
    sort
});

export const setResultsLoading = (loading = false) => ({
    type: ACTION_TYPE.SET_RESULTS_LOADING,
    loading
})

export const setResultsHasmore = (has_more = null) => ({
    type: ACTION_TYPE.SET_RESULTS_HASMORE,
    has_more
})

export const setResultsError = (error = false) => ({
    type: ACTION_TYPE.SET_RESULTS_ERROR,
    error
})