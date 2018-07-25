import React from "react";
import { Grid, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TitleRow from "./TitleRow";
import TitleExpansion from "./TitleExpansion";
import $ from "jquery";

const API_URL =
  "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/";

class MainWrapper extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isDetailExpansion: false,
      selectedRowID: "",
      selectedGameID: "",
      isInitialTransition: false,
      gameItemData: {},
      categoryItems: []
    };
  }

  componentDidMount() {
    this.setState({ isInitialTransition: true });

    fetch("http://localhost:5000/api/psn/category_quick")
      .then(response => response.json())
      .then(data => {
        this.setState({ categoryItems: data });
        console.log(data);
      })
      .catch(error => console.log(error));

    // $.ajax({
    //   url: "http://localhost:5000/api/psn/category_quick",
    //   dataType: "json",
    //   cache: false,
    //   success: function(data) {
    //     this.setState({ categoryItems: data });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(
    //       "http://localhost:5000/api/psn/category_quick",
    //       status,
    //       err.toString()
    //     );
    //   }.bind(this)
    // });
  }

  handleSelectTitle = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedGameID: id
    });
  };

  handleExpansion = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedGameID: id,
      isDetailExpansion:
        this.state.selectedGameID !== id ? true : !this.state.isDetailExpansion,
      isLoading: true
    });
    fetch(API_URL + id)
      .then(response => response.json())
      .then(data => this.setState({ gameItemData: data }));
  };

  render() {
    const {
      isDetailExpansion,
      selectedRowID,
      selectedGameID,
      isInitialTransition
    } = this.state;

    return (
      <Grid fluid>
        {this.state.categoryItems.map(
          ({ category_url, category_name, gameItem }) => (
            <div>
              <CSSTransition
                in={isInitialTransition}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="row-category">
                  <h3> {category_name} </h3>
                  <TitleRow
                    rowid={category_url}
                    gameItem={gameItem}
                    selectedRowID={selectedRowID}
                    selectedGameID={selectedGameID}
                    isDetailExpansion={isDetailExpansion}
                    handleSelectTitle={this.handleSelectTitle}
                    handleExpansion={this.handleExpansion}
                  />
                  <CSSTransition
                    in={isDetailExpansion && selectedRowID == category_url}
                    timeout={300}
                    classNames="expansion"
                    unmountOnExit
                  >
                    <TitleExpansion
                      gameItem={
                        this.state.categoryItems.filter(
                          categoryItem =>
                            categoryItem.category_url === selectedRowID
                        )[0]
                      }
                      gameItemData={this.state.gameItemData}
                      selectedRowID={selectedRowID}
                      selectedGameID={selectedGameID}
                      isDetailExpansion={isDetailExpansion}
                      handleExpansion={this.handleExpansion}
                    />
                  </CSSTransition>
                </div>
              </CSSTransition>
            </div>
          )
        )}
      </Grid>
    );
  }
}

export default MainWrapper;
