import {
  getResultsService,
  getAnswersService,
  getQuestionInfoService,
  getUserPostsService,
  getTagPostsService,
} from './request';
import { SORT } from '../common/constants';
import { SortType } from '../types/constants';
import { IAnswer, IQuestionInfo, IQuestion } from '../types/response';

export function getResults(title: string, page: number = 1, sort: SortType = SORT.ACTIVITY) {
  return getResultsService(title, page, sort);
}

export function getAnswers(questionId: number): Promise<IAnswer[]> {
  return getAnswersService(questionId);
}

export function getUserPosts(
  userId: number, sort: SortType = SORT.ACTIVITY,
): Promise<IQuestionInfo[]> {
  return getUserPostsService(userId, sort);
}

export function getTagPosts(tag: string): Promise<IQuestionInfo[]> {
  return getTagPostsService(tag);
}

export async function getQuestionInfo(questionId: number): Promise<IQuestion> {
  const response = await getQuestionInfoService(questionId);
  return response.items[0];
}
