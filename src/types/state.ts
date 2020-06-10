import { SortType, SideBarType } from "./constants";

export interface IQuestion {
    info: any,
    answers: any[],
    loading: boolean,
    error: boolean
}

export interface IResults {
    items: any[],
    page: number,
    sort: SortType,
    loading: boolean,
    has_more: boolean,
    error: boolean
}

export interface ISideResults {
    items: any[],
    sort: SortType,
    loading: boolean,
    error: boolean,
    group: SideBarType
}

export interface RootState {
    title: string,
    question: IQuestion,
    results: IResults,
    sideResults: ISideResults
}