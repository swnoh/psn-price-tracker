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
      currentIdx: 0,
      discount_price_percentage: ""
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

  componentDidMount() {
    // this.props.titleItem.map(({ id }) => {
    //   fetch(
    //     "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/" +
    //       id
    //   )
    //     .then(response => response.json())
    //     .then(data => {
    //       const titleItemData = data;
    //       const rewards =
    //         titleItemData.default_sku && titleItemData.default_sku.rewards[0];
    //       const discount_price_percentage = rewards && rewards.discount;
    //       const plus_price_percentage = rewards && rewards.bonus_discount;
    //       const is_plus_price = rewards && rewards.isPlus;
    //       this.setState({
    //         discount_price_percentage: discount_price_percentage
    //       });
    //     });
    // });
  }

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
          <Slider {...slick_settings} style={{ height: "500px" }}>
            {titleItem.map(({ id, title_name, thumb_img_url }, index) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <div
                  className={
                    isDetailExpansion
                      ? selectedTitleID === id || selectedRowID !== rowid
                        ? "tile"
                        : "tile overlay"
                      : "tile"
                  }
                  onClick={() => {
                    handleExpansion(rowid, id);
                    this.handleHoverOff();
                  }}
                >
                  <div>
                    <div
                      className={
                        this.state.isHoverOn
                          ? selectedTitleID === id
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
                        alt={title_name}
                      />
                      <div className="tile__discount tile__plus_discount">
                        {/* <span> SAVE {discount_price_percentage}%</span> */}
                        <span>
                          {this.state.discount_price_percentage
                            ? `SAVE ${this.state.discount_price_percentage} %`
                            : null}
                        </span>
                      </div>
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
                      {/* <div className="tile__title">{title_name}</div> */}
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
