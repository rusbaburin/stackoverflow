import { SortType, SideBarType } from "./constants";

export interface IQuestionInfo {
    answer_count: 1;
    body: string;
    creation_date: number;
    is_answered: boolean;
    link: string;
    owner: IOwner;
    question_id: number;
    score: number;
    tags: string[];
    title: string;
    view_count: number;
}
export interface IAnswer {
    answer_id: number
    body: string
    creation_date: number
    owner: IOwner
    question_id: number
    score: number
    title: string
}

export interface IOwner {
    display_name: string
    link: string
    profile_image: string
    reputation: number
    user_id: number
    user_type: string
}
export interface IResult {
    answer_count: number
    creation_date: number
    is_answered: boolean
    link: string
    owner: IOwner
    question_id: number
    score: number
    tags: string[]
    title: string
    view_count: number
}

export interface ISideResult extends IQuestionInfo {}

export interface IQuestion {
    info: IQuestionInfo,
    answers: IAnswer[],
    loading: boolean,
    error: boolean
}

export interface IResults {
    items: IResult[],
    page: number,
    sort: SortType,
    loading: boolean,
    has_more: boolean | null,
    error: boolean
}

export interface ISideResults {
    items: ISideResult[],
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