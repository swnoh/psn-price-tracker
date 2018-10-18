import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ExpansionPanelHeader = ({
  isPanelMedia,
  isPanelDescription,
  closeExpansionPanel,
  selectedRowID,
  selectedGameID,
  slideChunk,
  selectedGameItem
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
                ? 'titlename'
                : 'titlenamepanel'
            }
            unmountOnExit
          >
            <Col xs={12} className="col-expansion-title">
              <h2>{selectedGameItem.game_title}</h2>
            </Col>
          </CSSTransition>
        </TransitionGroup>
      </Row>
      <a
        className="close-button icon-close"
        aria-label="close"
        onClick={() => closeExpansionPanel()}
      >
        &times;
      </a>
    </React.Fragment>
  );
};

export default ExpansionPanelHeader;
