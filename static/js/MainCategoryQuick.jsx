import React from "react";
import MainCategory from "./MainCategory";

const SITE_URL = "http://psntracker.azurewebsites.net";

class MainCategoryQuick extends React.Component {
  state = {
    categoryItems: [],
    categoryExpansionPanel: false
  };

  componentDidMount() {
    fetch(`${SITE_URL}/api/psn/category_quick`)
      .then(response => response.json())
      .then(data => {
        this.setState({ categoryItems: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <MainCategory
        categoryItems={this.state.categoryItems}
        categoryExpansionPanel={this.state.categoryExpansionPanel}
      />
    );
  }
}

export default MainCategoryQuick;
