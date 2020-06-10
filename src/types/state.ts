import { SortType, SideBarType } from "./constants";

export interface IAnswer {
    [key: string]: any
}

export interface IResult {
    [key: string]: any
}

export interface ISideResult {
    [key: string]: any
}

export interface IQuestion {
    info: any,
    answers: IAnswer[],
    loading: boolean,
    error: boolean
}

export interface IResults {
    items: IResult[],
    page: number,
    sort: SortType,
    loading: boolean,
    has_more: boolean,
    error: boolean
}

export interface ISideResults {
    items: ISideResult[],
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