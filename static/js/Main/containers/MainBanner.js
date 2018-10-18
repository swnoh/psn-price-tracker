import { connect } from 'react-redux';
import MainBanner from '../components/MainBanner';
// import mainOperations from '../duck/operations';

const mapStateToProps = state => {
  return {
    bannerItems: state.main.banners.bannerItems
  };
};

// const mapDispatchToProps = dispatch => {
//   const fetchBanner = () => {
//     dispatch(mainOperations.fetchBanner());
//   };

//   return { fetchBanner };
// };

export default connect(mapStateToProps)(MainBanner);
