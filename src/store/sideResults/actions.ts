import { ACTION_TYPE, SORT } from '../../common/constants';
import { IQuestionInfo } from '../../types/response';
import { SortType, SideBarType } from '../../types/constants';
import { IReplaceSideResults, ISetSideResultsLoading, ISetSideResultsError } from '../../types/actions';

export const replaceSideResults = (items: IQuestionInfo[] = [], sort: SortType = SORT.ACTIVITY, group: SideBarType | null = null): IReplaceSideResults => ({
    type: ACTION_TYPE.REPLACE_SIDERESULTS,
    items,
    sort,
    group
});

export const setSideResultsLoading = (loading: boolean = false): ISetSideResultsLoading => ({
    type: ACTION_TYPE.SET_SIDERESULTS_LOADING,
    loading
})

export const setSideResultsError = (error: boolean = false): ISetSideResultsError => ({
    type: ACTION_TYPE.SET_SIDERESULTS_ERROR,
    error
})