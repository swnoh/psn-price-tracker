import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Rating from 'react-rating';

class ExpansionPanelInfo extends React.Component {
  render() {
    const {
      isPanelMedia,
      isPanelDescription,
      gameItemApiData,
      selectedGameItem,
      slideChunk
    } = this.props;

    const regular_price =
      gameItemApiData.default_sku && gameItemApiData.default_sku.display_price;

    const rewards =
      gameItemApiData.default_sku && gameItemApiData.default_sku.rewards[0];

    const discount_price = rewards && rewards.display_price;
    const discount_price_percentage = rewards && rewards.discount;

    const plus_price = rewards && rewards.bonus_display_price;
    const plus_price_percentage = rewards && rewards.bonus_discount;
    const is_plus_price = rewards && rewards.isPlus;

    const release_date = gameItemApiData.release_date;

    return (
      <TransitionGroup>
        <CSSTransition
          key={
            isPanelMedia || isPanelDescription
              ? gameItemApiData.id + 50
              : gameItemApiData.id
          }
          timeout={500}
          classNames={
            !slideChunk && (isPanelMedia || isPanelDescription)
              ? 'titleinfopanel'
              : 'fade'
          }
        >
          <Row className="row-expansion-title-info">
            <Col xs={6} md={12} lg={12}>
              <img
                className="title-info-thumb"
                src={selectedGameItem.thumb_img_url}
              />
            </Col>
            <Col xs={6} md={12} lg={12}>
              <h2>
                <span
                  style={
                    discount_price && !is_plus_price
                      ? {
                          textDecoration: 'line-through',
                          color: 'grey'
                        }
                      : null
                  }
                >
                  {regular_price}
                </span>
                <span>
                  {discount_price && !is_plus_price && ' ' + discount_price}
                </span>
              </h2>
              <h2
                style={{
                  color: 'yellow',
                  marginTop: '0'
                }}
              >
                {is_plus_price ? discount_price : plus_price}
                {is_plus_price || plus_price ? (
                  <img
                    style={{
                      width: '20px',
                      marginLeft: '5px'
                    }}
                    src="https://image.ibb.co/jOncz8/playstation_plus_plus_icon.png"
                    alt="playstation_plus_plus_icon"
                  />
                ) : null}
              </h2>
              <Rating
                initialRating={
                  gameItemApiData.star_rating &&
                  gameItemApiData.star_rating.score &&
                  parseFloat(gameItemApiData.star_rating.score)
                }
                readonly
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
              />
              <h4> {gameItemApiData.provider_name} </h4>
              <h4>
                {release_date
                  ? 'Release date: ' + release_date.slice(0, 10)
                  : null}
              </h4>
              <Button
                className="button-playstation-store"
                href={selectedGameItem.game_url}
                target="_blank"
              >
                <span>
                  <img
                    src="https://thumb.ibb.co/eWAJzJ/psn_store_icon.png"
                    width="30px"
                  />
                </span>
                Buy at Playstation Store
              </Button>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default ExpansionPanelInfo;
