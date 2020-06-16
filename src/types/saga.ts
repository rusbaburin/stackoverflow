import { SAGA_TYPE } from '../common/constants';
import { SortType } from './constants';

// Question
export interface IGetQuestionAsync {
    type: typeof SAGA_TYPE.GET_QUESTION_ASYNC,
    questionId: number
}

// Results
export interface IAddResultsAsync {
    type: typeof SAGA_TYPE.ADD_RESULTS_ASYNC
}

export interface IGetResultsAsync {
    type: typeof SAGA_TYPE.GET_RESULTS_ASYNC,
    title: string
}

export interface ISortResultsAsync {
    type: typeof SAGA_TYPE.SORT_RESULTS_ASYNC,
    sort: SortType
}

// SideResults
export interface IGetUserResultsAsync {
    type: typeof SAGA_TYPE.GET_USER_RESULTS_ASYNC,
    userId: number
}

export interface IGetTagResultsAsync {
    type: typeof SAGA_TYPE.GET_TAG_RESULTS_ASYNC,
    tag: string
}

export interface ISortSideResultsAsync {
    type: typeof SAGA_TYPE.SORT_SIDERESULTS_ASYNC,
    sort: SortType
}

export type RootSaga =
            IGetQuestionAsync |
            IAddResultsAsync |
            IGetResultsAsync |
            ISortResultsAsync |
            IGetUserResultsAsync |
            IGetTagResultsAsync |
            ISortSideResultsAsync
