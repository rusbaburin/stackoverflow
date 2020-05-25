import { getResultsService, getAnswersService, getQuestionInfoService } from './request';

export function getResults(title, page = 1) {
    return getResultsService(title, page);
}

export function getAnswers(questionId) {
    return getAnswersService(questionId);
}

export async function getQuestionInfo(questionId) {
    const response = await getQuestionInfoService(questionId);
    return response.items[0];
}