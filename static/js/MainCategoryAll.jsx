import React from "react";
import MainCategory from "./MainCategory";
import { Transition } from "react-transition-group";

const SITE_URL = "http://psntracker.azurewebsites.net";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

class MainCategoryAll extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      categoryItems: [],
      categoryTitleExpansion: false,
      showTransition: false
    };
  }

  componentDidMount() {
    this.setState({ showTransition: true });

    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.name
    ) {
      this.handleCategory(this.props.match.params.name);
    }
  }

  handleCategory = category_name => {
    fetch(`${SITE_URL}/api/psn/category/${category_name}`)
      .then(response => response.json())
      .then(data => {
        let newCategory = [];
        let rowItem = [];
        let chunk = 10;

        for (let i = 0, j = data.gameItem.length; i < j; i += chunk) {
          newCategory.push({
            category_url: i,
            category_name: category_name,
            gameItem: data.gameItem.slice(i, i + chunk)
          });
        }

        this.setState({
          categoryItems: newCategory,
          categoryTitleExpansion: !this.state.categoryTitleExpansion
        });
      })
      .catch(error => console.log("error"));
  };

  render() {
    return (
      <Transition in={this.state.showTransition} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className="page-category-all"
          >
            <MainCategory
              categoryItems={this.state.categoryItems}
              categoryTitleExpansion={this.state.categoryTitleExpansion}
            />
          </div>
        )}
      </Transition>
    );
  }
}

export default MainCategoryAll;
