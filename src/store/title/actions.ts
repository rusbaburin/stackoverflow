import { ACTION_TYPE } from '../../common/constants';
import { ISetTitle } from '../../types/actions';

export const setTitle = (title = ''): ISetTitle => ({
    type: ACTION_TYPE.SET_TITLE,
    title
});