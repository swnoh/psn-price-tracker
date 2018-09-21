import React from "react";
import { Row } from "react-bootstrap";
import { Transition } from "react-transition-group";
import LazyLoad from "react-lazy-load";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

class TitleRow extends React.Component {
  state = {
    isHoverOn: false,
    currentIdx: 0,
    intialTransition: false,
    imgLoaded: false
  };

  componentDidMount() {
    this.setState({
      intialTransition: true
    });
  }

  handleHoverOn = index => {
    this.setState({ isHoverOn: true, currentIdx: index });
  };

  handleHoverOff = () => {
    this.setState({ isHoverOn: false, currentIdx: -1 });
  };

  handleTransform = (className, index, lastIdx) => {
    const { isHoverOn, currentIdx } = this.state;

    let classNameTransform = className;

    if (this.state.isHoverOn) {
      if (index === currentIdx) classNameTransform += " tile_transform";
      else if (index < currentIdx) classNameTransform += " tile_prev_transform";
      else if (index > currentIdx) classNameTransform += " tile_next_transform";

      if (currentIdx === 0) classNameTransform += " first";
      else if (currentIdx === lastIdx && this.props.slideChunk - 1 === lastIdx)
        classNameTransform += " last";
    }

    return classNameTransform;
  };

  render() {
    const {
      gameItem,
      rowid,
      showExpansionPanel,
      handleExpansion,
      handleSelectTitle,
      selectedRowID,
      selectedGameID,
      categoryExpansionPanel,
      slideChunk,
      isCategoryQuick
    } = this.props;

    const { currentIdx, intialTransition, isHoverOn, imgLoaded } = this.state;

    const lastIdx = gameItem.length - 1;

    return (
      <Row
        className={
          isCategoryQuick ? "row-slide-game" : "row-slide-game no-slide-arrow"
        }
      >
        {gameItem.map(
          (
            {
              game_id,
              game_title,
              thumb_img_url,
              regular_price,
              display_price,
              discount_message,
              plus_price,
              plus_exclusive_price
            },
            index
          ) => (
            <Transition in={intialTransition} timeout={duration} key={index}>
              {state => (
                <div
                  className="tile"
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}
                  onClick={() => {
                    handleExpansion(rowid, game_id);
                    handleSelectTitle(rowid, game_id);
                    this.handleHoverOff();
                  }}
                  onMouseEnter={() => {
                    if (showExpansionPanel) {
                      selectedRowID === rowid
                        ? selectedGameID !== game_id
                          ? handleExpansion(rowid, game_id)
                          : null
                        : slideChunk > 3 && this.handleHoverOn(index);
                    } else {
                      slideChunk > 3 && this.handleHoverOn(index);
                    }
                  }}
                  onMouseLeave={this.handleHoverOff}
                >
                  <div
                    className={this.handleTransform(
                      "tile__details",
                      index,
                      lastIdx
                    )}
                  >
                    <div className="tile__title">{game_title}</div>
                    <div className="tile__price">{display_price}</div>
                  </div>
                  <div
                    className={this.handleTransform(
                      "tile__media",
                      index,
                      lastIdx
                    )}
                  >
                    <LazyLoad offsetVertical={500} offsetHorizontal={1800}>
                      <img
                        className={imgLoaded ? "tile__img loaded" : "tile__img"}
                        src={thumb_img_url}
                        onLoad={() => {
                          this.setState({
                            imgLoaded: true
                          });
                        }}
                        onError={e => {
                          e.target.src =
                            "https://store.playstation.com/img/default/product-image-game.svg";
                        }}
                        alt={game_title}
                      />
                    </LazyLoad>
                    <LazyLoad offsetVertical={500} offsetHorizontal={1800}>
                      <div
                        className={
                          plus_exclusive_price
                            ? `tile__discount tile__plus_discount ${imgLoaded &&
                                " loaded"}`
                            : `tile__discount  ${imgLoaded && " loaded"}`
                        }
                      >
                        {discount_message ? (
                          plus_exclusive_price ? (
                            <React.Fragment>
                              <img
                                className="plus_exclusive_price_icon"
                                src="https://store.playstation.com/img/pluslogo-16-9dfb3755863c364a2ffcbebf7e19d7e6.png"
                              />{" "}
                              <span>{discount_message}</span>
                            </React.Fragment>
                          ) : (
                            <span>{discount_message}</span>
                          )
                        ) : null}
                      </div>
                    </LazyLoad>
                    <div
                      className={
                        showExpansionPanel && selectedRowID === rowid
                          ? selectedGameID === game_id
                            ? "tile__focus focus-box"
                            : "tile__focus overlay"
                          : null
                      }
                    />
                  </div>
                </div>
              )}
            </Transition>
          )
        )}
      </Row>
    );
  }
}

export default TitleRow;
