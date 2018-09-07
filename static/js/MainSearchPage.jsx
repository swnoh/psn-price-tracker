import React from "react";
import MainCategory from "./MainCategory";
import { Transition } from "react-transition-group";
import queryString from "query-string";
import loadingImg from "../images/loading.svg";
import unhappyImg from "../images/unhappy.png";

const SITE_URL = "https://psntracker.azurewebsites.net";
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
  state = {
    searchWord: "",
    rawData: {},
    categoryItems: [],
    categoryExpansionPanel: false,
    showTransition: false,
    isFetchDone: false
  };

  componentDidMount() {
    this.setState({ showTransition: true });
    const value = queryString.parse(this.props.location.search);
    this.handleSearch(value.q);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      const value = queryString.parse(this.props.location.search);
      this.handleSearch(value.q);
    }

    if (prevProps.slideChunk !== this.props.slideChunk) {
      this.handleChunk(this.state.searchWord, this.state.rawData, false);
    }
  }

  handleSearch = searchWord => {
    this.setState({
      isFetchDone: false
    });
    fetch(`${SITE_URL}/api/psn/search?q=${searchWord}`)
      .then(response => response.json())
      .then(data => {
        let loading = true;
        this.setState({
          searchWord: searchWord,
          rawData: data
        });
        this.handleChunk(searchWord, data, loading);
      })
      .catch(error => console.log("Fetch error"));
  };

  handleChunk = (searchWord, data, loading) => {
    let newCategory = [];
    let rowItem = [];
    let chunk = this.props.slideChunk;

    if (Object.keys(data).length === 0 && data.constructor === Object) {
      return;
    } else {
      for (let i = 0, j = data.gameItem.length; i < j; i += chunk) {
        newCategory.push({
          category_url: "search-" + searchWord + "-" + i,
          category_name: "Result for " + searchWord,
          gameItem: data.gameItem.slice(i, i + chunk)
        });
      }
      setTimeout(
        () =>
          this.setState({
            categoryItems: newCategory,
            categoryExpansionPanel: true,
            isFetchDone: true
          }),
        loading ? 1000 : 0
      );
    }
  };

  render() {
    const {
      showTransition,
      categoryItems,
      categoryExpansionPanel,
      isFetchDone
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
            {isFetchDone ? (
              categoryItems.length !== 0 ? (
                <MainCategory
                  categoryItems={categoryItems}
                  categoryExpansionPanel={categoryExpansionPanel}
                  slideChunk={this.props.slideChunk}
                />
              ) : (
                <p
                  style={{
                    fontSize: "3em",
                    fontWeight: "bold",
                    color: "rgba(255, 255, 255, 0.5)",
                    paddingTop: "150px",
                    minWidth: "700px"
                  }}
                >
                  <img
                    src={unhappyImg}
                    style={{
                      margin: "auto",
                      marginBottom: "30px",
                      display: "block"
                    }}
                  />
                  Oops! No results were found.
                </p>
              )
            ) : (
              <img
                src={loadingImg}
                style={{
                  margin: "auto",
                  marginTop: "250px",
                  display: "block"
                }}
              />
            )}
          </div>
        )}
      </Transition>
    );
  }
}

export default MainSearchPage;
