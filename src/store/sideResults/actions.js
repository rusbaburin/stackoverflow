import { ACTION_TYPE } from '../../common/constants';

export const replaceSideResults = (items = []) => ({
    type: ACTION_TYPE.REPLACE_SIDERESULTS,
    items,
});