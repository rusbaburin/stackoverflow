import { EXAPI, SORT } from '../common/constants';
import { SortType } from '../types/constants';

async function request(urn: string) {
  const response = await fetch(`${EXAPI.STACKEXCHANGE}/${urn}`);

  if (response.status >= 400) {
    return Promise.reject(response);
  }

  return response.json();
}

export function getResultsService(title: string, page: number = 1, sort: SortType = SORT.ACTIVITY) {
  return request(`search/advanced?page=${page}&order=desc&sort=${sort}&title=${title}&site=stackoverflow`);
}

export function getAnswersService(questionId: number) {
  return request(`questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!--1nZx2SAHs1`);
}

export function getQuestionInfoService(questionId: number) {
  return request(`questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5`);
}

export function getUserPostsService(userId: number, sort: SortType = SORT.ACTIVITY) {
  return request(`users/${userId}/questions?order=desc&sort=${sort}&site=stackoverflow`);
}

export function getTagPostsService(tag: string) {
  return request(`tags/${tag}/faq?site=stackoverflow`);
}
