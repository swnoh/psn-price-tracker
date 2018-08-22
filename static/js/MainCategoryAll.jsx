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
  state = {
    category_name: "",
    rawData: {},
    categoryItems: [],
    categoryExpansionPanel: false,
    showTransition: false,
    slideChunk: 10
  };

  handleResize = () => {
    if (window.innerWidth > 1904)
      this.setState({
        slideChunk: 10
      });
    else if (window.innerWidth > 1729)
      this.setState({
        slideChunk: 9
      });
    else if (window.innerWidth > 1554)
      this.setState({
        slideChunk: 8
      });
    else if (window.innerWidth > 1379)
      this.setState({
        slideChunk: 7
      });
    else if (window.innerWidth > 1204)
      this.setState({
        slideChunk: 6
      });
    else if (window.innerWidth > 1029)
      this.setState({
        slideChunk: 5
      });
    else if (window.innerWidth > 854)
      this.setState({
        slideChunk: 4
      });
    else
      this.setState({
        slideChunk: 3
      });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.setState({ showTransition: true });

    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.name
    ) {
      this.handleCategory(this.props.match.params.name);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.slideChunk !== this.state.slideChunk) {
      this.handleChunk(this.state.category_name, this.state.rawData);
    }
  }

  handleCategory = category_name => {
    fetch(`${SITE_URL}/api/psn/category/${category_name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          category_name: category_name,
          rawData: data
        });
        this.handleChunk(category_name, data);
      })
      .catch(error => console.log("error"));
  };

  handleChunk = (category_name, data) => {
    let newCategory = [];
    let rowItem = [];
    let chunk = this.state.slideChunk;

    if (Object.keys(data).length === 0 && data.constructor === Object) {
      return;
    } else {
      for (let i = 0, j = data.gameItem.length; i < j; i += chunk) {
        newCategory.push({
          category_url: i,
          category_name: category_name,
          gameItem: data.gameItem.slice(i, i + chunk)
        });
      }
      this.setState({
        slideChunk: this.state.slideChunk,
        categoryItems: newCategory,
        categoryExpansionPanel: true
      });
    }
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
              categoryExpansionPanel={this.state.categoryExpansionPanel}
            />
          </div>
        )}
      </Transition>
    );
  }
}

export default MainCategoryAll;
