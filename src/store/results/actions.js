import { ACTION_TYPE } from '../../common/constants';

export const replaceResults = (results = []) => ({
    type: ACTION_TYPE.REPLACE_RESULTS,
    results
});