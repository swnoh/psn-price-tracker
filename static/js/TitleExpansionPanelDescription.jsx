import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TitleExpansionPanelDescription extends React.Component {
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
          key={selectedTitleID + 2}
          timeout={300}
          classNames="titleinfodetail"
          unmountOnExit
        >
          <Col
            xs={12}
            md={4}
            lg={8}
            className="col-expansion-panel col-expansion-description"
          >
            {" "}
            <h5>
              The latest release for the NOBUNAGA'S AMBITION series, the
              pinnacle of historical simulation games! Highlighting the
              'Resolve' of the officers to show not only their ability, but also
              their humanity. Includes events that highlight the officers'
              lives, taken from the great events of history, anecdotes, and
              legends. Immerse yourself in the people and events of the time as
              you struggle for supremacy. The greatest experience of the Warring
              States period begins! <br />
              <br />【Deluxe Edition Contents】<br />'NOBUNAGA'S AMBITION:
              Taishi' Game<br />NOBUNAGA'S AMBITION: Taishi: Season Pass<br />Scenario
              'Fateful Clash'<br />Scenario 'Jiro-Hoshi Naotora'<br />Maiden CG
              Set: WomenRulers<br />
              <br />Remote Play requires PS Vita system and sufficiently robust
              Wi-Fi connection.<br />
              <br />1 player<br />150MB minimum save size<br />DUALSHOCK®4<br />Remote
              Play<br />
              <br /> Software subject to license
              (us.playstation.com/softwarelicense). Online features require an
              account and are subject to terms of service and applicable privacy
              policy (playstationnetwork.com/terms-of-service &
              playstationnetwork.com/privacy-policy). One-time license fee for
              play on account’s designated primary PS4™ system and other PS4™
              systems when signed in with that account.<br />
              <br />NOBUNAGA'S AMBITION: Taishi ©2017-2018 KOEI TECMO GAMES CO.,
              LTD. Published by KOEI TECMO AMERICA CORP. Developed by KOEI TECMO
              GAMES CO., LTD. NOBUNAGA'S AMBITION is a registered trademark of
              KOEI TECMO GAMES CO., LTD. The KT logo is a registered trademark
              of KOEI TECMO HOLDINGS CO., LTD. All rights reserved.<br />
            </h5>
          </Col>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelDescription;
