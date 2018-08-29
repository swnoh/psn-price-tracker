import React from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ExpansionPanelHeader = ({
  game_title,
  isPanelMedia,
  isPanelDescription,
  handleExpansion,
  selectedRowID,
  selectedGameID,
  slideChunk
}) => {
  return (
    <React.Fragment>
      <Row>
        <TransitionGroup>
          <CSSTransition
            key={
              isPanelMedia || isPanelDescription
                ? selectedGameID + 50
                : selectedGameID
            }
            timeout={300}
            classNames={
              !slideChunk && (isPanelMedia || isPanelDescription)
                ? "titlename"
                : "titlenamepanel"
            }
            unmountOnExit
          >
            <Col xs={12} className="col-expansion-title">
              <h2>{game_title}</h2>
            </Col>
          </CSSTransition>
        </TransitionGroup>
      </Row>
      <a
        className="close-button icon-close"
        aria-label="close"
        onClick={() => handleExpansion(selectedRowID, selectedGameID)}
      >
        &times;
      </a>
    </React.Fragment>
  );
};

export default ExpansionPanelHeader;
