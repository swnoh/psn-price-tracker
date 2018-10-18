import { connect } from 'react-redux';
import MainCategoryAll from '../components/MainCategoryAll';
import mainOperations from '../duck/operations';

const mapStateToProps = state => {
  return {
    slideChunk: state.common.slideChunk
  };
};

const mapDispatchToProps = dispatch => {
  const fetchCategoryAll = (category_name, slideChunk) => {
    dispatch(mainOperations.fetchCategoryAll(category_name, slideChunk));
  };

  return { fetchCategoryAll };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCategoryAll);
