import { connect } from 'react-redux';
import MainSearchPage from '../components/MainSearchPage';
import mainOperations from '../duck/operations';

const mapStateToProps = state => {
  return {
    slideChunk: state.common.slideChunk,
    categoryItems: state.main.categoryItems,
    isFetchDone: state.main.isFetchDone
  };
};

const mapDispatchToProps = dispatch => {
  const fetchCategorySearch = (searchWord, slideChunk) => {
    dispatch(mainOperations.fetchCategorySearch(searchWord, slideChunk));
  };

  return { fetchCategorySearch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSearchPage);
