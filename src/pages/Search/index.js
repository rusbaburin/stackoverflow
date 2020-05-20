import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _SearchPage } from './Search';
import { replaceResults, addResults } from '../../store/results/actions';
import { setTitle } from '../../store/title/actions';

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({
    addResults: bindActionCreators(addResults, dispatch),
    replaceResults: bindActionCreators(replaceResults, dispatch),
    setTitle: bindActionCreators(setTitle, dispatch)
});

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(_SearchPage);