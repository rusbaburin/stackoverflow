import { ACTION_TYPE, SORT } from '../../common/constants';
import {
    IReplaceResults,
    IAddResults,
    ISetResultsError,
    ISetResultsLoading,
    ISetResultsHasmore
} from '../../types/actions';

const initialState = {
    items: [],
    page: 0,
    sort: SORT.ACTIVITY,
    loading: false,
    has_more: null,
    error: false
}

export const results = (state = initialState, action: IReplaceResults | IAddResults | ISetResultsLoading | ISetResultsError | ISetResultsHasmore) => {
    switch(action.type) {
        case ACTION_TYPE.REPLACE_RESULTS :
            return {
                ...state,
                items: action.items,
                page: action.page,
                sort: action.sort
            };
        case ACTION_TYPE.ADD_RESULTS :
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.items
                ],
                page: action.page,
                sort: action.sort
            }
        case ACTION_TYPE.SET_RESULTS_LOADING :
            return {
                ...state,
                loading: action.loading
            }
        case ACTION_TYPE.SET_RESULTS_HASMORE :
            return {
                ...state,
                has_more: action.has_more
            }
        case ACTION_TYPE.SET_RESULTS_ERROR :
            return {
                ...state,
                error: action.error
            }
        default :
            return state;
    }
}