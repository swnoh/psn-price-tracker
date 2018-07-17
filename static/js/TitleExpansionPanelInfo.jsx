import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Rating from "react-rating";

class TitleExpansionPanelInfo extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { titleItem, titleItemData, selectedTitleItem } = this.props;

    // const selectedTitleItem = titleItem.titleItem.filter(
    //   item => item.id === selectedTitleID
    // )[0];

    const discount_price =
      titleItemData.default_sku &&
      titleItemData.default_sku.rewards[0] &&
      titleItemData.default_sku.rewards[0].display_price;

    const regular_price =
      titleItemData.default_sku && titleItemData.default_sku.display_price;

    const plus_price =
      titleItemData.default_sku &&
      titleItemData.default_sku.rewards &&
      titleItemData.default_sku.rewards.bonus_display_price;

    const release_date = titleItemData.release_date;
    return (
      <TransitionGroup>
        <CSSTransition
          key={
            this.props.isPanelMedia || this.props.isPanelDescription
              ? titleItemData.id + 50
              : titleItemData.id
          }
          timeout={300}
          classNames={
            this.props.isPanelMedia || this.props.isPanelDescription
              ? "titleinfopanel"
              : "titleinfo"
          }
        >
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <div>
              <img
                src={selectedTitleItem.thumb_img_url}
                style={{ width: "200px", paddingTop: "30px" }}
              />
              <h2>
                <span
                  style={
                    discount_price
                      ? {
                          textDecoration: "line-through",
                          color: "grey"
                        }
                      : null
                  }
                >
                  {regular_price}
                </span>
                <span>{discount_price && " " + discount_price}</span>
              </h2>
              <h2
                style={{
                  color: "yellow",
                  marginTop: "0"
                }}
              >
                {plus_price}
                {plus_price ? (
                  <img
                    style={{
                      width: "20px",
                      marginLeft: "5px"
                    }}
                    src="https://image.ibb.co/jOncz8/playstation_plus_plus_icon.png"
                    alt="playstation_plus_plus_icon"
                  />
                ) : null}
              </h2>
              <Rating
                initialRating={
                  titleItemData.star_rating && titleItemData.star_rating.score
                }
                readonly
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
              />
              <h4> {titleItemData.provider_name} </h4>
              <h4>
                {release_date
                  ? "Release date: " + release_date.slice(0, 10)
                  : null}
              </h4>
              <Button style={{ width: "250px" }}>
                <span>
                  <img
                    src="https://thumb.ibb.co/eWAJzJ/psn_store_icon.png"
                    width="30px"
                  />
                </span>Buy at Playstation Store
              </Button>
            </div>
          </Col>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelInfo;
