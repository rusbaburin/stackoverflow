import { takeEvery, put, select } from 'redux-saga/effects';

import { getAnswers, getQuestionInfo } from '../../services/client';
import { SAGA_TYPE } from '../../common/constants';
import { setQuestion, setQuestionLoading, setQuestionError } from '../../store/question/actions';

export const getQuestionAsync = (questionId) => ({
    type: SAGA_TYPE.GET_QUESTION_ASYNC,
    questionId
})

function* fetchQuestion(action) {
    const questionId = action.questionId;

    yield put(setQuestionLoading(true));
    yield put(setQuestionError(false));
    yield put(setQuestion());

    try {
        const questionInfo = yield getQuestionInfo(questionId);
        const answers = yield getAnswers(questionId);

        yield put(setQuestion(questionInfo, answers.items));
    } catch (err) {
        console.error(err);
        yield put(setQuestionError(true));
    }

    yield put(setQuestionLoading(false));
}

export function* watchGetQuestion() {
    yield takeEvery(SAGA_TYPE.GET_QUESTION_ASYNC, fetchQuestion);
}