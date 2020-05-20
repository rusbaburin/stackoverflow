import { ACTION_TYPE } from '../../common/constants';

export const setTitle = (title = '') => ({
    type: ACTION_TYPE.SET_TITLE,
    title
});