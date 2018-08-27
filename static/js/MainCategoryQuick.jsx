import React from "react";
import MainCategory from "./MainCategory";

const SITE_URL = "http://psntracker.azurewebsites.net";

class MainCategoryQuick extends React.Component {
  state = {
    categoryItems: [],
    categoryExpansionPanel: false
  };

  handleFetch = limit => {
    fetch(`${SITE_URL}/api/psn/category_quick?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ categoryItems: data });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    const slideChunk = this.props.slideChunk;
    const limit = slideChunk > 4 ? slideChunk * 2 : slideChunk * 4;
    this.handleFetch(limit);
  }

  render() {
    const { categoryItems, categoryExpansionPanel } = this.state;
    console.log(categoryItems);
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
