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
const url = "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/validateForm";

function handleSubmitForm(e) {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerName: "test",
      customerAge: 21,
      serviceOfficerName: "Testing",
      NRIC: "S12345678F",
      registrationTime: new Date().toLocaleString(),
      branchCode: 123,
      image: "Test.png",
      productType: ["0137"]
    }),
  })
    .then((res) => {
      return res.text();
    })
    .catch((err) => {
      console.log(err);
    });
}
class ResultPage extends Component {
  handleSubmitForm(){
    console.log("HI");
  }
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
