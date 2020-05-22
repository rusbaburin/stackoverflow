import { EXAPI } from "../common/constants";

async function request(urn) {
    const response = await fetch(`${ EXAPI.STACKEXCHANGE }/${ urn }`);

    if (response.status >= 400) {
        return Promise.reject(response);
    }

    return response.json();
}

export function getResults(title, page = 1) {
    return request(`search/advanced?page=${ page }&order=desc&sort=creation&title=${ title }&site=stackoverflow`);
}