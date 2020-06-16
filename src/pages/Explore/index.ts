import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import _ExplorePage from './Explore';
import { getQuestionAsync } from '../../sagas/question/saga';
import { RootState } from '../../types/state';
import { RootSaga } from '../../types/saga';

const mapStateToProps = (state: RootState) => ({
  question: state.question,
});

const mapDispatchToProps = (dispatch: Dispatch<RootSaga>) => ({
  getQuestionAsync: bindActionCreators(getQuestionAsync, dispatch),
});

const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage);
export default ExplorePage;
