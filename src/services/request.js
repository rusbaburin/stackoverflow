import { EXAPI } from "../common/constants";

async function request(urn) {
    const response = await fetch(`${ EXAPI.STACKEXCHANGE }/${ urn }`);

    if (response.status >= 400) {
        return Promise.reject(response);
    }

    return response.json();
}

export function getResults(title) {
    return request(`search/advanced?order=desc&sort=activity&title=${ title }&site=stackoverflow`);
}