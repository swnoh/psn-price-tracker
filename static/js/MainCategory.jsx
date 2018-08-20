import React from "react";
import { Grid, ListGroup, ListGroupItem, Button, Fade } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TitleRow from "./TitleRow";
import TitleExpansion from "./TitleExpansion";
import { NavLink } from "react-router-dom";

const API_URL =
  "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/";

const SITE_URL = "http://psntracker.azurewebsites.net";

class MainCategory extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isDetailExpansion: false,
      selectedRowID: "",
      selectedGameID: "",
      gameItemApiData: {},
      itemPrice: {},
      categoryTitleHover: false,
      currentIdx: 0,
      show: false
    };
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
      .then(data => this.setState({ gameItemApiData: data }))
      .catch(function(error) {
        console.log("Fetch failed");
      });

    fetch(`${SITE_URL}/api/psn/price/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ itemPrice: data }))
      .catch(function(error) {
        console.log("Fetch failed");
      });
  };

  render() {
    const { isDetailExpansion, selectedRowID, selectedGameID } = this.state;

    const { categoryItems, categoryTitleExpansion } = this.props;

    return (
      <Grid fluid>
        {categoryItems.map(
          ({ category_url, category_name, gameItem }, index) => (
            <div className="row-category" key={index}>
              <React.Fragment>
                {!categoryTitleExpansion ? (
                  <NavLink to={"category/" + category_name}>
                    <h3
                      className="row-category-title"
                      onMouseEnter={() =>
                        this.setState({
                          currentIdx: index,
                          categoryTitleHover: !this.state.categoryTitleHover
                        })
                      }
                      onMouseLeave={() =>
                        this.setState({
                          currentIdx: index,
                          categoryTitleHover: !this.state.categoryTitleHover
                        })
                      }
                    >
                      <a className="row-category-title-link">
                        <div
                          className="row-category-title-name"
                          style={{
                            cursor: "pointer"
                          }}
                        >
                          {category_name}
                        </div>
                        <CSSTransition
                          in={
                            this.state.currentIdx == index &&
                            this.state.categoryTitleHover
                          }
                          timeout={800}
                          classNames="rowTitle"
                          unmountOnExit
                        >
                          {state => (
                            <div className="row-category-title-explorer">
                              Explorer All
                              <CSSTransition
                                in={state === "entered"}
                                timeout={300}
                                classNames="rowTitleArrow"
                                unmountOnExit
                              >
                                <i
                                  className="fa fa-angle-double-right"
                                  style={{ paddingLeft: "7px" }}
                                />
                              </CSSTransition>
                            </div>
                          )}
                        </CSSTransition>
                      </a>
                    </h3>
                  </NavLink>
                ) : index == 0 ? (
                  <h3> {category_name} </h3>
                ) : null}

                <TitleRow
                  rowid={category_url}
                  gameItem={gameItem}
                  selectedRowID={selectedRowID}
                  selectedGameID={selectedGameID}
                  isDetailExpansion={isDetailExpansion}
                  handleSelectTitle={this.handleSelectTitle}
                  handleExpansion={this.handleExpansion}
                  categoryTitleExpansion={categoryTitleExpansion}
                />

                <CSSTransition
                  in={isDetailExpansion && selectedRowID == category_url}
                  timeout={700}
                  classNames="expansion"
                  unmountOnExit
                >
                  <TitleExpansion
                    gameItem={
                      categoryItems.filter(
                        categoryItem =>
                          categoryItem.category_url === selectedRowID
                      )[0]
                    }
                    gameItemApiData={this.state.gameItemApiData}
                    itemPrice={this.state.itemPrice}
                    selectedRowID={selectedRowID}
                    selectedGameID={selectedGameID}
                    isDetailExpansion={isDetailExpansion}
                    handleExpansion={this.handleExpansion}
                  />
                </CSSTransition>
              </React.Fragment>
            </div>
          )
        )}
      </Grid>
    );
  }
}

export default MainCategory;
