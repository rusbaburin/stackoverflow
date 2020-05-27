import { EXAPI, SORT } from "../common/constants";

async function request(urn) {
    const response = await fetch(`${ EXAPI.STACKEXCHANGE }/${ urn }`);

    if (response.status >= 400) {
        return Promise.reject(response);
    }

    return response.json();
}

export function getResultsService(title, page = 1, sort = SORT.RELEVANCE) {
    return request(`search/advanced?page=${ page }&order=desc&sort=${ sort }&title=${ title }&site=stackoverflow`);
}

export function getAnswersService(questionId) {
    return request(`questions/${ questionId }/answers?order=desc&sort=activity&site=stackoverflow&filter=!--1nZx2SAHs1`);
}

export function getQuestionInfoService(questionId) {
    return request(`questions/${ questionId }?order=desc&sort=activity&site=stackoverflow&filter=!9_bDDxJY5`);
}

export function getUserPostsService(userId) {
    return request(`users/${ userId }/questions?order=desc&sort=activity&site=stackoverflow`);
}

export function getTagPostsService(tag) {
    return request(`tags/${ tag }/faq?site=stackoverflow`);
}