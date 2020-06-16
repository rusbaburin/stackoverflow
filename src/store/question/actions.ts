import { ACTION_TYPE } from '../../common/constants';
import { ISetQuestion, ISetQuestionLoading, ISetQuestionError } from '../../types/actions';

export const setQuestion = (info = null, answers = []): ISetQuestion => ({
  type: ACTION_TYPE.SET_QUESTION,
  info,
  answers,
});

export const setQuestionLoading = (loading = false): ISetQuestionLoading => ({
  type: ACTION_TYPE.SET_QUESTION_LOADING,
  loading,
});

export const setQuestionError = (error = false): ISetQuestionError => ({
  type: ACTION_TYPE.SET_QUESTION_ERROR,
  error,
});
