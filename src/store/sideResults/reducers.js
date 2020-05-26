import { ACTION_TYPE } from '../../common/constants';

export const sideResults = (state = [], action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_SIDERESULTS :
            return action.items
        default :
            return state;
    }
}