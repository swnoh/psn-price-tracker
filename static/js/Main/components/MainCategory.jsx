import React from 'react';
import { Grid, ListGroup, ListGroupItem, Button, Fade } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll';

import TitleSlide from '../../Common/containers/TitleSlide';
import ExpansionPanel from '../../ExpansionPanel/containers/ExpansionPanel';
import ExpansionPanelNonTransition from '../../ExpansionPanel/containers/ExpansionPanelNonTransition';

class MainCategory extends React.Component {
  state = {
    categoryTitleHover: false,
    currentIdx: 0,
    show: false
  };

  handleScroll = rowid => {
    scroller.scrollTo(rowid, {
      duration: 300,
      smooth: true,
      offset: -30
    });
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.showExpansionPanel &&
      this.props.slideChunk > 3 &&
      prevProps.selectedRowID !== this.props.selectedRowID
    ) {
      setTimeout(() => {
        this.handleScroll(this.props.selectedRowID);
      }, 1000);
    }
  }

  render() {
    const {
      categoryItems,
      categoryExpansionPanel,
      slideChunk,
      showExpansionPanel,
      selectedRowID,
      selectedGameID
    } = this.props;

    return (
      <Grid fluid>
        {categoryItems.map(
          ({ category_url, category_name, gameItem }, index) => (
            <div
              className="row-category"
              key={index}
              data-scroll={category_url}
              onMouseEnter={() =>
                this.setState({
                  currentIdx: index,
                  categoryTitleHover: true
                })
              }
              onMouseLeave={() =>
                this.setState({
                  currentIdx: index,
                  categoryTitleHover: false
                })
              }
            >
              <React.Fragment>
                {!categoryExpansionPanel ? (
                  <NavLink
                    to={'category/' + category_name}
                    className="row-category-title-link"
                  >
                    <h3 className="row-category-title">
                      <div className="row-category-title-name">
                        {category_name}
                      </div>
                      <CSSTransition
                        in={
                          this.state.currentIdx == index &&
                          this.state.categoryTitleHover
                        }
                        timeout={400}
                        classNames="rowTitle"
                        unmountOnExit
                      >
                        {state => (
                          <div
                            className="row-category-title-explorer"
                            style={{
                              cursor: 'pointer'
                            }}
                          >
                            Check Out More
                            <CSSTransition
                              in={state === 'entered'}
                              timeout={150}
                              classNames="rowTitleArrow"
                              unmountOnExit
                            >
                              <i
                                className="fa fa-angle-double-right"
                                style={{ paddingLeft: '7px' }}
                              />
                            </CSSTransition>
                          </div>
                        )}
                      </CSSTransition>
                    </h3>
                  </NavLink>
                ) : index == 0 ? (
                  <h3 className="row-category-title"> {category_name} </h3>
                ) : null}

                <Element name={category_url} className="element" />
                <TitleSlide
                  rowid={category_url}
                  gameItem={gameItem}
                  categoryExpansionPanel={categoryExpansionPanel}
                  categoryTitleHover={this.state.categoryTitleHover}
                  currentIdx={this.state.currentIdx}
                  selectedIndex={index}
                />
                {slideChunk > 3 ? (
                  <CSSTransition
                    in={showExpansionPanel && selectedRowID == category_url}
                    timeout={500}
                    classNames="expansion"
                    unmountOnExit
                  >
                    <ExpansionPanel />
                  </CSSTransition>
                ) : (
                  showExpansionPanel &&
                  selectedRowID == category_url && (
                    <ExpansionPanelNonTransition />
                  )
                )}
              </React.Fragment>
            </div>
          )
        )}
      </Grid>
    );
  }
}

export default MainCategory;
