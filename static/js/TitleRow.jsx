import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

class TitleRow extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isHoverOn: false,
      currentIdx: 0
    };
  }

  mouseHoverStyle = {
    default: {
      position: "relative",
      transition: "350ms"
    }
  };

  handleHoverOn = (rowid, id, index) => {
    this.setState({ isHoverOn: true, currentIdx: index });
    this.props.handleSelectTitle(rowid, id);
  };

  handleHoverOff = () => {
    this.setState({ isHoverOn: false, currentIdx: 0 });
  };

  render() {
    const {
      gameItem,
      rowid,
      isDetailExpansion,
      handleSelectTitle,
      handleExpansion,
      selectedRowID,
      selectedGameID
    } = this.props;

    const slick_settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 10,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <TransitionGroup className="title-row">
        <Grid fluid onMouseOut={this.handleHoverOff}>
          <Slider {...slick_settings} style={{ height: "500px" }}>
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
                <CSSTransition key={game_id} timeout={500} classNames="fade">
                  <div
                    className={
                      isDetailExpansion
                        ? selectedGameID === game_id || selectedRowID !== rowid
                          ? "tile"
                          : "tile overlay"
                        : "tile"
                    }
                    onClick={() => {
                      handleExpansion(rowid, game_id);
                      this.handleHoverOff();
                    }}
                  >
                    <div>
                      <div
                        className={
                          this.state.isHoverOn
                            ? selectedGameID === game_id
                              ? "tile__media tile_transform"
                              : this.state.currentIdx > index
                                ? "tile__media tile_prev_transform"
                                : "tile__media tile_next_transform"
                            : "tile__media"
                        }
                      >
                        <img
                          className="tile__img"
                          src={thumb_img_url}
                          alt={game_title}
                        />
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
                        <div
                          className={
                            isDetailExpansion && selectedGameID === game_id
                              ? "tile__focus focus-box"
                              : "tile__focus"
                          }
                        />
                      </div>
                      <div
                        className={
                          this.state.isHoverOn && selectedGameID === game_id
                            ? "tile__details tile_transform"
                            : "tile__details"
                        }
                        onMouseOver={() => {
                          if (isDetailExpansion) {
                            this.handleHoverOff();
                            selectedGameID !== game_id &&
                            selectedRowID === rowid
                              ? handleExpansion(rowid, game_id)
                              : null;
                          } else {
                            this.handleHoverOn(rowid, game_id, index);
                          }
                        }}
                      >
                        {/* <div className="tile__title">{game_title}</div> */}
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              )
            )}
          </Slider>
        </Grid>
      </TransitionGroup>
    );
  }
}

export default TitleRow;
