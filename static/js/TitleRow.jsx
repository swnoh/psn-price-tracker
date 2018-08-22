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
    intialTransition: false
  };

  componentDidMount() {
    this.setState({
      intialTransition: true
    });
  }

  handleHoverOn = (rowid, id, index, event) => {
    const selectedSlickIndex =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .dataset.index;
    this.setState({ isHoverOn: true, currentIdx: index });
    this.props.handleSelectTitle(rowid, id);
  };

  handleHoverOff = () => {
    this.setState({ isHoverOn: false, currentIdx: -1 });
  };

  handleTransform = (index, lastIdx) => {
    const { isHoverOn, currentIdx } = this.state;

    let classNameTransform = "tile__media";

    if (this.state.isHoverOn) {
      if (index === currentIdx) classNameTransform += " tile_transform";
      else if (index < currentIdx) classNameTransform += " tile_prev_transform";
      else if (index > currentIdx) classNameTransform += " tile_next_transform";

      if (currentIdx === 0) classNameTransform += " first";
      else if (currentIdx === lastIdx) classNameTransform += " last";
    }

    return classNameTransform;
  };

  render() {
    const {
      gameItem,
      rowid,
      isDetailExpansion,
      handleExpansion,
      selectedRowID,
      selectedGameID,
      categoryExpansionPanel
    } = this.props;

    const { currentIdx, intialTransition, isHoverOn } = this.state;

    const lastIdx = gameItem.length - 1;

    return (
      <Row className="row-slide-game">
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
                    this.handleHoverOff();
                  }}
                  onMouseEnter={event => {
                    if (isDetailExpansion) {
                      this.handleHoverOff();
                      selectedGameID !== game_id && selectedRowID === rowid
                        ? handleExpansion(rowid, game_id)
                        : null;
                    } else {
                      this.handleHoverOn(rowid, game_id, index, event);
                    }
                  }}
                  onMouseLeave={this.handleHoverOff}
                >
                  <div
                    className={
                      isHoverOn && selectedGameID === game_id
                        ? currentIdx === 0
                          ? "tile__details tile_transform first"
                          : currentIdx === lastIdx
                            ? "tile__details tile_transform last"
                            : "tile__details tile_transform"
                        : "tile__details"
                    }
                  >
                    <div className="tile__title">{game_title}</div>
                    <div className="tile__price">{display_price}</div>
                  </div>
                  <div className={this.handleTransform(index, lastIdx)}>
                    <LazyLoad offsetVertical={500} offsetHorizontal={1800}>
                      <img
                        className="tile__img"
                        src={thumb_img_url}
                        onError={e => {
                          e.target.src =
                            "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1477-CUSA07022_00-FORTNITETESTING1/1532106140000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000";
                        }}
                        alt={game_title}
                      />
                    </LazyLoad>

                    <LazyLoad offsetVertical={500} offsetHorizontal={1800}>
                      <div
                        className={
                          plus_price || plus_exclusive_price
                            ? "tile__discount tile__plus_discount"
                            : "tile__discount"
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
                        isDetailExpansion && selectedRowID === rowid
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
