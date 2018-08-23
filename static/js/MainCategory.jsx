import React from "react";
import { Grid, ListGroup, ListGroupItem, Button, Fade } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TitleSlide from "./TitleSlide";
import ExpansionPanel from "./ExpansionPanel";
import { NavLink } from "react-router-dom";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

const API_URL =
  "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/";

const SITE_URL = "http://psntracker.azurewebsites.net";

class MainCategory extends React.Component {
  state = {
    showExpansionPanel: false,
    selectedRowID: "",
    selectedGameID: "",
    gameItemApiData: {},
    localGameItemApiData: {},
    isGameItemApiData: false,
    itemPrice: {},
    localItemPrice: {},
    isItemPrice: false,
    categoryTitleHover: false,
    currentIdx: 0,
    show: false
  };

  handleSelectTitle = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedGameID: id
    });
  };

  handleScroll = rowid => {
    scroller.scrollTo(rowid, {
      duration: 500,
      smooth: true,
      offset: -50
    });
  };

  handleExpansion = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedGameID: id,
      showExpansionPanel:
        this.state.selectedGameID !== id
          ? true
          : !this.state.showExpansionPanel,
      isLoading: true,
      isGameItemApiData: false,
      isItemPrice: false
    });

    if (typeof this.state.localGameItemApiData[id] === "undefined") {
      fetch(API_URL + id)
        .then(response => response.json())
        .then(data => {
          const tempData = this.state.localGameItemApiData;
          tempData[id] = data;

          this.setState({
            gameItemApiData: data,
            localGameItemApiData: tempData,
            isGameItemApiData: true
          });
        })
        .catch(function(error) {
          console.log("Fetch failed");
        });
    } else {
      this.setState({
        gameItemApiData: this.state.localGameItemApiData[id],
        localGameItemApiData: this.state.localGameItemApiData
      });
      setTimeout(() => {
        this.setState({
          isGameItemApiData: true
        });
      }, 50);
    }

    if (typeof this.state.localItemPrice[id] === "undefined") {
      fetch(`${SITE_URL}/api/psn/price/${id}`)
        .then(response => response.json())
        .then(data => {
          const tempData = this.state.localItemPrice;
          tempData[id] = data;
          this.setState({
            itemPrice: data,
            localItemPrice: tempData,
            isItemPrice: true
          });
        })
        .catch(function(error) {
          console.log("Fetch failed");
        });
    } else {
      this.setState({
        itemPrice: this.state.localItemPrice[id],
        localItemPrice: this.state.localItemPrice
      });
      setTimeout(() => {
        this.setState({
          isItemPrice: true
        });
      }, 50);
    }

    setTimeout(() => {
      this.handleScroll(rowid);
    }, 600);
  };

  render() {
    const { showExpansionPanel, selectedRowID, selectedGameID } = this.state;

    const { categoryItems, categoryExpansionPanel } = this.props;

    return (
      <Grid fluid>
        {categoryItems.map(
          ({ category_url, category_name, gameItem }, index) => (
            <div
              className="row-category"
              key={index}
              data-scroll={category_url}
            >
              <React.Fragment>
                {!categoryExpansionPanel ? (
                  <NavLink
                    to={"category/" + category_name}
                    className="row-category-title-link"
                  >
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
                            Check Out More
                            <CSSTransition
                              in={state === "entered"}
                              timeout={50}
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
                    </h3>
                  </NavLink>
                ) : index == 0 ? (
                  <h3> {category_name} </h3>
                ) : null}

                <Element name={category_url} className="element" />
                <TitleSlide
                  rowid={category_url}
                  gameItem={gameItem}
                  selectedRowID={selectedRowID}
                  selectedGameID={selectedGameID}
                  showExpansionPanel={showExpansionPanel}
                  handleSelectTitle={this.handleSelectTitle}
                  handleExpansion={this.handleExpansion}
                  categoryExpansionPanel={categoryExpansionPanel}
                />
                <CSSTransition
                  in={showExpansionPanel && selectedRowID == category_url}
                  timeout={500}
                  classNames="expansion"
                  unmountOnExit
                >
                  <ExpansionPanel
                    gameItem={
                      categoryItems.filter(
                        categoryItem =>
                          categoryItem.category_url === selectedRowID
                      )[0]
                    }
                    gameItemApiData={this.state.gameItemApiData}
                    isGameItemApiData={this.state.isGameItemApiData}
                    itemPrice={this.state.itemPrice}
                    isItemPrice={this.state.isItemPrice}
                    selectedRowID={selectedRowID}
                    selectedGameID={selectedGameID}
                    showExpansionPanel={showExpansionPanel}
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
