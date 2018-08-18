import React from "react";
import MainCategory from "./MainCategory";
import { Transition } from "react-transition-group";
import queryString from "query-string";

// const SITE_URL = "http://psntracker.azurewebsites.net";
const SITE_URL = "http://localhost:5000";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

class MainSearchPage extends React.Component {
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
    const value = queryString.parse(this.props.location.search);
    this.handleSearch(value.q);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const value = queryString.parse(this.props.location.search);
      this.handleSearch(value.q);
    }
  }

  handleSearch = searchWord => {
    fetch(`${SITE_URL}/api/psn/search?q=${searchWord}`)
      .then(response => response.json())
      .then(data => {
        let newCategory = [];
        let rowItem = [];
        let chunk = 10;

        for (let i = 0, j = data.gameItem.length; i < j; i += chunk) {
          newCategory.push({
            category_url: i,
            category_name: "Result for " + searchWord,
            gameItem: data.gameItem.slice(i, i + chunk)
          });
        }

        this.setState({
          categoryItems: newCategory,
          categoryTitleExpansion: true
        });
      })
      .catch(error => console.log("Fetch error"));
  };

  render() {
    const {
      showTransition,
      categoryItems,
      categoryTitleExpansion
    } = this.state;
    return (
      <Transition in={showTransition} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className="page-search"
          >
            {categoryItems.length !== 0 ? (
              <MainCategory
                categoryItems={categoryItems}
                categoryTitleExpansion={categoryTitleExpansion}
              />
            ) : (
              <p style={{ fontSize: "3em", paddingTop: "100px" }}>Not found</p>
            )}
          </div>
        )}
      </Transition>
    );
  }
}

export default MainSearchPage;
