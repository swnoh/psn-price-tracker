import { connect } from 'react-redux';

import commonOperations from './Common/duck/operations';
import mainOperations from './Main/duck/operations';
import App from './App';

const mapStateToProps = state => {
  return {
    slideChunk: state.common.slideChunk,
    backgroundImgUrls: state.main.banners.bannerBackgroundUrl
  };
};

const mapDispatchToProps = dispatch => {
  const setSlideChunk = slideChunk => {
    dispatch(commonOperations.setSlideChunk(slideChunk));
  };
  const fetchBanner = () => {
    dispatch(mainOperations.fetchBanner());
  };

  return { setSlideChunk, fetchBanner };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
