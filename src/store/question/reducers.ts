/* eslint-disable max-len */
import { ACTION_TYPE } from '../../common/constants';
import { ISetQuestion, ISetQuestionLoading, ISetQuestionError } from '../../types/actions';

const initialState = {
  info: null,
  answers: [],
  loading: false,
  error: false,
};

const question = (state = initialState, action: ISetQuestion | ISetQuestionLoading | ISetQuestionError) => {
  switch (action.type) {
    case ACTION_TYPE.SET_QUESTION:
      return {
        ...state,
        info: action.info,
        answers: action.answers,
      };
    case ACTION_TYPE.SET_QUESTION_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case ACTION_TYPE.SET_QUESTION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default question;
