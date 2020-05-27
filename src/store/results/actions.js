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