import { ACTION_TYPE, SORT } from '../../common/constants';

export const replaceSideResults = (items = [], sort = SORT.ACTIVITY, group = null) => ({
    type: ACTION_TYPE.REPLACE_SIDERESULTS,
    items,
    sort,
    group
});

export const setSideResultsLoading = (loading = false) => ({
    type: ACTION_TYPE.SET_SIDERESULTS_LOADING,
    loading
})

export const setSideResultsError = (error = false) => ({
    type: ACTION_TYPE.SET_SIDERESULTS_ERROR,
    error
})