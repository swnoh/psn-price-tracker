import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Rating from "react-rating";

class TitleExpansionPanelInfo extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { titleItem, selectedTitleID } = this.props;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    return (
      <TransitionGroup>
        <CSSTransition
          key={
            this.props.isPanelMedia || this.props.isPanelDescription
              ? selectedTitleID + 50
              : selectedTitleID
          }
          timeout={300}
          classNames={
            this.props.isPanelMedia || this.props.isPanelDescription
              ? "titleinfopanel"
              : "titleinfo"
          }
          unmountOnExit
        >
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <div>
              <img
                src={selectedTitleItem.url}
                style={{ width: "300px", paddingTop: "30px" }}
              />
              <h2>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "grey"
                  }}
                >
                  $59.99
                </span>{" "}
                <span>$39.99</span>
              </h2>
              <h2
                style={{
                  color: "yellow",
                  marginTop: "0"
                }}
              >
                $29.99<img
                  style={{
                    width: "20px",
                    marginLeft: "5px"
                  }}
                  src="https://image.ibb.co/jOncz8/playstation_plus_plus_icon.png"
                  alt="playstation_plus_plus_icon"
                />
              </h2>
              <Rating
                initialRating={3.6}
                readonly
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
              />
              <h4> Electronic Arts Inc </h4>
              <h4> Released Dec 31, 2019 </h4>
              <Button style={{ width: "300px" }}>
                Buy at Playstation Store
              </Button>
            </div>
          </Col>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelInfo;
