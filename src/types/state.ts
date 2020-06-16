/* eslint-disable camelcase */
import { SortType, SideBarType } from './constants';
import { IQuestionInfo, IQuestion } from './response';

export interface IResults {
    items: IQuestionInfo[],
    page: number,
    sort: SortType,
    loading: boolean,
    has_more: boolean | null,
    error: boolean
}

export interface ISideResults {
    items: IQuestionInfo[],
    sort: SortType,
    loading: boolean,
    error: boolean,
    group: SideBarType | null
}

export interface RootState {
    title: string,
    question: IQuestion,
    results: IResults,
    sideResults: ISideResults
}
