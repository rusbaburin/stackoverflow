import { ACTION_TYPE } from '../../common/constants';
import { ISetTitle } from '../../types/actions';

export const title = (state = '', action: ISetTitle) => {
    switch(action.type) {
        case ACTION_TYPE.SET_TITLE :
            return action.title;
        default :
            return state;
    }
}