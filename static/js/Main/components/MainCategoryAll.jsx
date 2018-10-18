import React from 'react';
import MainCategory from '../containers/MainCategory';
import { Transition } from 'react-transition-group';

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
    showTransition: false
  };

  componentDidMount() {
    this.setState({ showTransition: true });

    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.name
    ) {
      this.props.fetchCategoryAll(
        this.props.match.params.name,
        this.props.slideChunk
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slideChunk !== this.props.slideChunk) {
      this.props.fetchCategoryAll(this.props.match.params.name);
    }
  }

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
            <MainCategory />
          </div>
        )}
      </Transition>
    );
  }
}

export default MainCategoryAll;
