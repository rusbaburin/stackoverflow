import { ACTION_TYPE, SORT } from '../../common/constants';

const initialState = {
    items: [],
    sort: SORT.ACTIVITY
}

export const sideResults = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_SIDERESULTS :
            return {
                items: action.items,
                sort: action.sort
            }
        default :
            return state;
    }
}