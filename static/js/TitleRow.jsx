import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Transition } from "react-transition-group";
import Slider from "react-slick";
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
  constructor(prop) {
    super(prop);
    this.state = {
      isHoverOn: false,
      currentIdx: 0,
      intialTransition: false
    };
  }

  mouseHoverStyle = {
    default: {
      position: "relative",
      transition: "350ms"
    }
  };

  componentDidMount() {
    this.setState({
      intialTransition: true
    });
  }

  handleHoverOn = (rowid, id, index) => {
    this.setState({ isHoverOn: true, currentIdx: index });
    this.props.handleSelectTitle(rowid, id);
    // console.log(this.state.activeSlide);
    const selectedInx = index >= 7 ? index % 7 : index;
    console.log(
      document
        .getElementsByClassName("slick-active")[0]
        .getAttribute("data-index")
    );
    console.log(document.getElementsByClassName("slick-active"));
    // console.log(
    //   document
    //     .getElementsByClassName("slick-active")
    //     [getElementsByClassName("slick-active").length - 1].getAttribute(
    //       "data-index"
    //     )
    // );
  };

  handleHoverOff = () => {
    this.setState({ isHoverOn: false, currentIdx: 0 });
  };

  handleHoverOffsss = event => {
    this.setState({ isHoverOn: false, currentIdx: 0 });
    console.log(event.target.parentElement);
  };

  render() {
    const {
      gameItem,
      rowid,
      isDetailExpansion,
      handleSelectTitle,
      handleExpansion,
      selectedRowID,
      selectedGameID,
      categoryTitleExpansion
    } = this.props;

    const slick_settings = {
      infinite: true,
      speed: 500,
      slidesToShow: categoryTitleExpansion ? gameItem.length : 10,
      slidesToScroll: categoryTitleExpansion ? gameItem.length : 10,
      arrows: !categoryTitleExpansion,
      variableWidth: true,
      lazyLoad: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: categoryTitleExpansion ? gameItem.length : 7,
            slidesToScroll: categoryTitleExpansion ? gameItem.length : 7
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: categoryTitleExpansion ? gameItem.length : 5,
            slidesToScroll: categoryTitleExpansion ? gameItem.length : 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: categoryTitleExpansion ? gameItem.length : 4,
            slidesToScroll: categoryTitleExpansion ? gameItem.length : 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: categoryTitleExpansion ? gameItem.length : 2,
            slidesToScroll: categoryTitleExpansion ? gameItem.length : 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: categoryTitleExpansion ? gameItem.length : 1,
            slidesToScroll: categoryTitleExpansion ? gameItem.length : 1
          }
        }
      ]
    };

    return (
      <Grid fluid>
        <Slider {...slick_settings}>
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
              <Transition in={this.state.intialTransition} timeout={duration}>
                {state => (
                  <div
                    className="tile"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}
                    data-tile={index}
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
                        this.handleHoverOn(rowid, game_id, index);
                      }
                    }}
                    onMouseLeave={this.handleHoverOff}
                  >
                    <div
                      className={
                        this.state.isHoverOn && selectedGameID === game_id
                          ? "tile__details selected"
                          : "tile__details"
                      }
                    >
                      <div className="tile__title">{game_title}</div>
                      <div className="tile__price">{display_price}</div>
                    </div>
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
                      <LazyLoad offsetVertical={500} offsetHorizontal={1300}>
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
        </Slider>
      </Grid>
    );
  }
}

export default TitleRow;
