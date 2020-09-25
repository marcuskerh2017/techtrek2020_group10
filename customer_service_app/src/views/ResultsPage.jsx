/* eslint-disable react/state-in-constructor */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    height: "100vh",
    background: "#FCFBFE",
  },
});

class ResultPage extends Component {

  render() {
    return (
      <>
        <Typography component="div">
          <h1 className="header">Results Page</h1>
        </Typography>
        <div className="developed-text">Built by TeckTrek</div>
      </>
    );
  }
}

ResultPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(ResultPage)));
