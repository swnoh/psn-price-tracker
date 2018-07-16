import React from "react";
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

class Footer extends React.Component {
  state = {
    showValidationMessage: false
  };

  render() {
    const { showValidationMessage } = this.state;
    return (
      <div>
        <CSSTransition
          in={showValidationMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          {state => (
            <p>
              Your name rocks!
              <CSSTransition
                in={state === "entered"}
                timeout={300}
                classNames="star"
                unmountOnExit
              >
                <div className="star">⭐</div>
              </CSSTransition>
            </p>
          )}
        </CSSTransition>
        <Button
          onClick={() => {
            this.setState(state => ({
              showValidationMessage: !state.showValidationMessage
            }));
          }}
        >
          Validate form
        </Button>
      </div>
    );
  }
}

export default Footer;
