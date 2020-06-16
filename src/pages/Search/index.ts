import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import _SearchPage from './Search';
import { replaceResults } from '../../store/results/actions';
import { getResultsAsync } from '../../sagas/results/saga';
import { RootState } from '../../types/state';
import { RootSaga } from '../../types/saga';

const mapStateToProps = (state: RootState) => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch: Dispatch<RootSaga>) => ({
  getResultsAsync: bindActionCreators(getResultsAsync, dispatch),
  replaceResults: bindActionCreators(replaceResults, dispatch),
});

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(_SearchPage);
export default SearchPage;
