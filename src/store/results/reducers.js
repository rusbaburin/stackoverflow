import { ACTION_TYPE } from '../../common/constants';

const initialState = {
    items: [],
    page: 0
}

export const results = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_RESULTS :
            return {
                items: action.items,
                page: action.page
            };
        case ACTION_TYPE.ADD_RESULTS :
            return {
                items: [
                    ...state.items,
                    ...action.items
                ],
                page: action.page
            }
        default :
            return state;
    }
}