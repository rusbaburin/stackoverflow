import { ACTION_TYPE, SORT } from '../../common/constants';

export const replaceSideResults = (items = [], sort = SORT.ACTIVITY) => ({
    type: ACTION_TYPE.REPLACE_SIDERESULTS,
    items,
    sort
});