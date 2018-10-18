import { connect } from 'react-redux';
import MainCategoryQuick from '../components/MainCategoryQuick';
import mainOperations from '../duck/operations';

const mapStateToProps = state => {
  return {
    slideChunk: state.common.slideChunk
  };
};

const mapDispatchToProps = dispatch => {
  const fetchCategoryQuick = limit => {
    dispatch(mainOperations.fetchCategoryQuick(limit));
  };

  const isCategoryQuick = isCategoryQuick => {
    dispatch(mainOperations.isCategoryQuick(isCategoryQuick));
  };

  return { fetchCategoryQuick, isCategoryQuick };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCategoryQuick);
