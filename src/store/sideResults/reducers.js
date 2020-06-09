import { ACTION_TYPE, SORT } from '../../common/constants';

const initialState = {
    items: [],
    sort: SORT.ACTIVITY,
    loading: false,
    error: false,
    group: null
}

export const sideResults = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_SIDERESULTS :
            return {
                ...state,
                items: action.items,
                sort: action.sort,
                group: action.group
            }
        case ACTION_TYPE.SET_SIDERESULTS_LOADING :
            return {
                ...state,
                loading: action.loading
            }
        case ACTION_TYPE.SET_SIDERESULTS_ERROR :
            return {
                ...state,
                error: action.error
            }
        default :
            return state;
    }
}