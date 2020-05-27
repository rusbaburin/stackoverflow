import { ACTION_TYPE, SORT } from '../../common/constants';

const initialState = {
    items: [],
    page: 0,
    sort: SORT.ACTIVITY
}

export const results = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_RESULTS :
            return {
                items: action.items,
                page: action.page,
                sort: action.sort
            };
        case ACTION_TYPE.ADD_RESULTS :
            return {
                items: [
                    ...state.items,
                    ...action.items
                ],
                page: action.page,
                sort: action.sort
            }
        default :
            return state;
    }
}