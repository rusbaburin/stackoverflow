import {
    getResultsService,
    getAnswersService,
    getQuestionInfoService,
    getUserPostsService,
    getTagPostsService
} from './request';

export function getResults(title, page = 1) {
    return getResultsService(title, page);
}

export function getAnswers(questionId) {
    return getAnswersService(questionId);
}

export function getUserPosts(userId) {
    return getUserPostsService(userId);
}

export function getTagPosts(tag) {
    return getTagPostsService(tag);
}

export async function getQuestionInfo(questionId) {
    const response = await getQuestionInfoService(questionId);
    return response.items[0];
}