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

    // transform: {
    //   transform: "scale(1.5) translate3d(0px, 0px, 0px)",
    //   opacity: ".99",
    //   transition: "350ms all"
    //   // transitionDelay: "30ms"
    // },
    // tile_next_transform: {
    //   transform: "translate3d(50px, 0px, 0px)",
    //   transitionDuration: "350ms",
    //   transitionTimingFunction: "cubic-bezier(0.5, 0, 0.1, 1)"
    //   // transitionDelay: "30ms"
    // },
    // tile_prev_transform: {
    //   transform: "translate3d(-50px, 0px, 0px)",
    //   transitionDuration: "350ms",
    //   transitionTimingFunction: "cubic-bezier(0.5, 0, 0.1, 1)"
    //   // transitionDelay: "30ms"
    // }
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
      titleItem,
      rowid,
      isDetailExpansion,
      handleSelectTitle,
      handleExpansion,
      selectedRowID,
      selectedTitleID
    } = this.props;

    const slick_settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 9,
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
          <Slider {...slick_settings}>
            {titleItem.map(({ id, title_name, thumb_img_url }, index) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <div
                  className="tile"
                  onClick={() => {
                    handleExpansion(rowid, id);
                    this.handleHoverOff();
                  }}
                >
                  <div>
                    <div className="tile__media">
                      <img
                        className={
                          this.state.isHoverOn
                            ? selectedTitleID === id
                              ? "tile__img tile_transform"
                              : this.state.currentIdx > index
                                ? "tile__img tile_prev_transform"
                                : "tile__img tile_next_transform"
                            : "tile__img"
                        }
                        src={thumb_img_url}
                        alt={title_name}
                        // style={
                        //   this.state.isHoverOn
                        //     ? selectedTitleID === id
                        //       ? this.mouseHoverStyle.transform
                        //       : this.state.currentIdx > index
                        //         ? this.mouseHoverStyle.tile_prev_transform
                        //         : this.mouseHoverStyle.tile_next_transform
                        //     : this.mouseHoverStyle.default
                        // }
                      />
                      <div
                        className={
                          isDetailExpansion && selectedTitleID === id
                            ? "tile__focus focus-box"
                            : "tile__focus"
                        }
                      />
                    </div>
                    <div
                      className={
                        this.state.isHoverOn && selectedTitleID === id
                          ? "tile__details tile_transform"
                          : "tile__details"
                      }
                      onMouseOver={() => {
                        if (isDetailExpansion) {
                          this.handleHoverOff();
                          selectedTitleID !== id && selectedRowID === rowid
                            ? handleExpansion(rowid, id)
                            : null;
                        } else {
                          this.handleHoverOn(rowid, id, index);
                        }
                      }}
                    >
                      <div className="tile__title">{title_name}</div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </Slider>
        </Grid>
      </TransitionGroup>
    );
  }
}

export default TitleRow;
