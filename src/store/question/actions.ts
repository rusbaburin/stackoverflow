import { ACTION_TYPE } from '../../common/constants';

export const setQuestion = (info = null, answers = []) => ({
    type: ACTION_TYPE.SET_QUESTION,
    info,
    answers
});

export const setQuestionLoading = (loading = false) => ({
    type: ACTION_TYPE.SET_QUESTION_LOADING,
    loading
});

export const setQuestionError = (error = false) => ({
    type: ACTION_TYPE.SET_QUESTION_ERROR,
    error
});