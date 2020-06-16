import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import _ResultsPage from './Results';

import { getResultsAsync, addResultsAsync, sortResultsAsync } from '../../sagas/results/saga';
import { getTagResultsAsync, getUserResultsAsync, sortSideResultsAsync } from '../../sagas/sideResults/saga';

import { RootState } from '../../types/state';
import { RootSaga } from '../../types/saga';

const mapStateToProps = (state: RootState) => ({
  results: state.results,
  sideResults: state.sideResults,
  title: state.title,
});

const mapDispatchToProps = (dispatch: Dispatch<RootSaga>) => ({
  getResultsAsync: bindActionCreators(getResultsAsync, dispatch),
  addResultsAsync: bindActionCreators(addResultsAsync, dispatch),
  sortResultsAsync: bindActionCreators(sortResultsAsync, dispatch),
  getTagResultsAsync: bindActionCreators(getTagResultsAsync, dispatch),
  getUserResultsAsync: bindActionCreators(getUserResultsAsync, dispatch),
  sortSideResultsAsync: bindActionCreators(sortSideResultsAsync, dispatch),
});

const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);
export default ResultsPage;
