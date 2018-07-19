import React from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TitleExpansionHeader = ({
  title_name,
  isPanelMedia,
  isPanelDescription,
  handleExpansion,
  selectedRowID,
  selectedTitleID
}) => {
  return (
    <React.Fragment>
      <Row>
        <TransitionGroup>
          <CSSTransition
            key={
              isPanelMedia || isPanelDescription
                ? selectedTitleID + 50
                : selectedTitleID
            }
            timeout={300}
            classNames={
              isPanelMedia || isPanelDescription
                ? "titlename"
                : "titlenamepanel"
            }
            unmountOnExit
          >
            <Col xs={12} className="col-expansion-title">
              <h2>{title_name}</h2>
            </Col>
          </CSSTransition>
        </TransitionGroup>
      </Row>
      <a
        className="close-button icon-close"
        aria-label="close"
        onClick={() => handleExpansion(selectedRowID, selectedTitleID)}
      >
        &times;
      </a>
    </React.Fragment>
  );
};

export default TitleExpansionHeader;
