import { ACTION_TYPE, SORT } from '../../common/constants';
import { IQuestionInfo } from '../../types/response';
import { SortType } from '../../types/constants';
import {
    IReplaceResults,
    IAddResults,
    ISetResultsLoading,
    ISetResultsHasmore,
    ISetResultsError
} from '../../types/actions';

export const replaceResults = (items: IQuestionInfo[] = [], page: number = 0, sort: SortType = SORT.ACTIVITY): IReplaceResults => ({
    type: ACTION_TYPE.REPLACE_RESULTS,
    items,
    page,
    sort
});

export const addResults = (items: IQuestionInfo[] = [], page: number = 0, sort: SortType = SORT.ACTIVITY): IAddResults => ({
    type: ACTION_TYPE.ADD_RESULTS,
    items,
    page,
    sort
});

export const setResultsLoading = (loading: boolean = false): ISetResultsLoading => ({
    type: ACTION_TYPE.SET_RESULTS_LOADING,
    loading
})

export const setResultsHasmore = (has_more: boolean | null = null): ISetResultsHasmore => ({
    type: ACTION_TYPE.SET_RESULTS_HASMORE,
    has_more
})

export const setResultsError = (error: boolean = false): ISetResultsError => ({
    type: ACTION_TYPE.SET_RESULTS_ERROR,
    error
})