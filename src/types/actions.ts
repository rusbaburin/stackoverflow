import { ACTION_TYPE } from '../common/constants';
import { SortType, ISidebarType } from './constants';

//Question
export interface ISetQuestion {
    type: typeof ACTION_TYPE.SET_QUESTION,
    info: any,
    answers: any[]
}

export interface ISetQuestionLoading {
    type: typeof ACTION_TYPE.SET_QUESTION_LOADING,
    loading: boolean
}

export interface ISetQuestionError {
    type: typeof ACTION_TYPE.SET_QUESTION_ERROR,
    error: boolean
}

//Results
export interface IReplaceResults {
    type: typeof ACTION_TYPE.REPLACE_RESULTS,
    items: any[]
    page: number
    sort: SortType
}

export interface IAddResults {
    type: typeof ACTION_TYPE.ADD_RESULTS,
    items: any[],
    page: number,
    sort: SortType
}

export interface ISetResultsLoading {
    type: typeof ACTION_TYPE.SET_RESULTS_LOADING,
    loading: boolean
}

export interface ISetResultsHasmore {
    type: typeof ACTION_TYPE.SET_RESULTS_HASMORE,
    has_more: boolean
}

//SideResults
export interface IReplaceSideResults {
    type: typeof ACTION_TYPE.REPLACE_SIDERESULTS,
    items: any[],
    sort: SortType
    group: ISidebarType
}

export interface ISetSideResultsLoading {
    type: typeof ACTION_TYPE.SET_SIDERESULTS_LOADING,
    loading: boolean
}

export interface ISetSideResultsError {
    type: typeof ACTION_TYPE.SET_SIDERESULTS_ERROR,
    error: boolean
}

//Title
export interface ISetTitle {
    type: typeof ACTION_TYPE.SET_TITLE,
    title: string
}

export type RootActions =
            ISetQuestion |
            ISetQuestionLoading |
            ISetQuestionError |
            IReplaceResults |
            IAddResults |
            ISetResultsLoading | 
            ISetResultsHasmore |
            IReplaceSideResults |
            ISetSideResultsLoading |
            ISetSideResultsError |
            ISetTitle