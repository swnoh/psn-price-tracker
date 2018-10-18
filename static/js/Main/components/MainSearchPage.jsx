import React from 'react';
import MainCategory from '../containers/MainCategory';
import { Transition } from 'react-transition-group';
import queryString from 'query-string';
import loadingImg from '../../../images/loading.svg';
import unhappyImg from '../../../images/unhappy.png';

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
    showTransition: false
  };

  componentDidMount() {
    this.setState({ showTransition: true });
    const value = queryString.parse(this.props.location.search);
    this.props.fetchCategorySearch(value.q, this.props.slideChunk);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      const value = queryString.parse(this.props.location.search);
      this.props.fetchCategorySearch(value.q, this.props.slideChunk);
    }

    if (prevProps.slideChunk !== this.props.slideChunk) {
      this.props.fetchCategorySearch(value.q, this.props.slideChunk);
    }
  }

  render() {
    const { categoryItems, isFetchDone } = this.props;
    return (
      <Transition in={this.state.showTransition} timeout={duration}>
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
                <MainCategory />
              ) : (
                <p
                  style={{
                    fontSize: '3em',
                    fontWeight: 'bold',
                    color: 'rgba(255, 255, 255, 0.5)',
                    paddingTop: '150px',
                    minWidth: '700px'
                  }}
                >
                  <img
                    src={unhappyImg}
                    style={{
                      margin: 'auto',
                      marginBottom: '30px',
                      display: 'block'
                    }}
                  />
                  Oops! No results were found.
                </p>
              )
            ) : (
              <img
                src={loadingImg}
                style={{
                  margin: 'auto',
                  marginTop: '250px',
                  display: 'block'
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
