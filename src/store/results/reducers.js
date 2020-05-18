import { ACTION_TYPE } from '../../common/constants';

export const results = (state = [], action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_RESULTS :
            return action.results;
        default :
            return state;
    }
}