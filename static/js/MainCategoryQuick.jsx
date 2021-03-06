import React from "react";
import MainCategory from "./MainCategory";

const SITE_URL = "https://psntracker.azurewebsites.net";

class MainCategoryQuick extends React.Component {
  state = {
    categoryItems: [],
    categoryExpansionPanel: false
  };

  handleFetch = limit => {
    fetch(`${SITE_URL}/api/psn/category_quick?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        if (this._mounted) this.setState({ categoryItems: data });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this._mounted = true;
    const slideChunk = this.props.slideChunk;
    const limit = slideChunk > 4 ? slideChunk * 2 : slideChunk * 4;
    this.handleFetch(limit);
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const { categoryItems, categoryExpansionPanel } = this.state;
    return (
      <MainCategory
        categoryItems={categoryItems}
        categoryExpansionPanel={categoryExpansionPanel}
        slideChunk={this.props.slideChunk}
        isCategoryQuick={true}
      />
    );
  }
}

export default MainCategoryQuick;
