export const EXAPI = {
    STACKEXCHANGE: 'https://api.stackexchange.com/2.2'
}

export const SAGA_TYPE = {
    GET_RESULTS_ASYNC: 'GET_RESULTS_ASYNC',
    ADD_RESULTS_ASYNC: 'ADD_RESULTS_ASYNC',
    SORT_RESULTS_ASYNC: 'SORT_RESULTS_ASYNC',
    GET_TAG_RESULTS_ASYNC: 'GET_TAG_RESULTS_ASYNC',
    GET_USER_RESULTS_ASYNC: 'GET_USER_RESULTS_ASYNC',
    SORT_SIDERESULTS_ASYNC: 'SORT_SIDERESULTS_ASYNC',
}

export const ACTION_TYPE = {
    ADD_RESULTS: 'ADD_RESULTS',
    REPLACE_RESULTS: 'REPLACE_RESULTS',
    SET_RESULTS_LOADING: 'SET_RESULTS_LOADING',
    SET_RESULTS_HASMORE: 'SET_RESULTS_HASMORE',
    SET_RESULTS_ERROR: 'SET_RESULTS_ERROR',
    SET_TITLE: 'SET_TITLE',
    REPLACE_SIDERESULTS: 'REPLACE_SIDERESULTS',
    SET_SIDERESULTS_LOADING: 'SET_SIDERESULTS_LOADING',
    SET_SIDERESULTS_ERROR: 'SET_SIDERESULTS_ERROR'
}

export const PAGE = {
    SEARCH: '/',
    RESULTS: '/results',
    EXPLORE: '/explore'
}

export const SORT = {
    CREATION: 'creation',
    ACTIVITY: 'activity'
}

export const SIDEBAR_TYPE = {
    TAG: 'tags',
    USER: 'user'
}