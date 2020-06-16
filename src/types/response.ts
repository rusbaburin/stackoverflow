/* eslint-disable camelcase */
export interface IQuestionInfo {
    answer_count: number;
    body ?: string;
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

export interface IQuestion {
    info: IQuestionInfo,
    answers: IAnswer[],
    loading: boolean,
    error: boolean
}
