import {
    getResultsService,
    getAnswersService,
    getQuestionInfoService,
    getUserPostsService,
    getTagPostsService
} from './request';
import { SORT } from '../common/constants';

export function getResults(title, page = 1, sort = SORT.ACTIVITY) {
    return getResultsService(title, page, sort);
}

export function getAnswers(questionId) {
    return getAnswersService(questionId);
}

export function getUserPosts(userId, sort = SORT.ACTIVITY) {
    return getUserPostsService(userId, sort);
}

export function getTagPosts(tag) {
    return getTagPostsService(tag);
}

export async function getQuestionInfo(questionId) {
    const response = await getQuestionInfoService(questionId);
    return response.items[0];
}