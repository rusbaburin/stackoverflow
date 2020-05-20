import { ACTION_TYPE } from '../../common/constants';

export const title = (state = '', action) => {
    switch(action.type) {
        case ACTION_TYPE.SET_TITLE :
            return action.title;
        default :
            return state;
    }
}