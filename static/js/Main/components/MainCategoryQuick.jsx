import React from 'react';
import MainCategory from '../containers/MainCategory';

class MainCategoryQuick extends React.Component {
  componentDidMount() {
    const slideChunk = this.props.slideChunk;
    const limit = slideChunk > 4 ? slideChunk * 2 : slideChunk * 4;
    this.props.fetchCategoryQuick(limit);
    this.props.isCategoryQuick(true);
  }

  componentWillUnmount() {
    this.props.isCategoryQuick(false);
  }

  render() {
    return <MainCategory />;
  }
}

export default MainCategoryQuick;
