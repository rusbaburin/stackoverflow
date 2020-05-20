import { ACTION_TYPE } from '../../common/constants';

export const replaceResults = (items = [], page = 0) => ({
    type: ACTION_TYPE.REPLACE_RESULTS,
    items,
    page
});

export const addResults = (items = [], page = 0) => ({
    type: ACTION_TYPE.ADD_RESULTS,
    items,
    page
});