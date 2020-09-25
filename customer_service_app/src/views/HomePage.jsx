/* eslint-disable react/state-in-constructor */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Clock from 'react-live-clock';
import HeaderHome from "../components/HeaderHome";

const styles = (theme) => ({
  root: {
    height: "100vh",
    background: "#FCFBFE",
  },
});

class HomePage extends Component {

  render() {
    return (
      <>
        <HeaderHome />
        {/* <Typography component="div">
          <h1 className="header">Home Page</h1>
        </Typography> */}
        <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img alt="gallery" style={{ zIndex: -5 }} class="w-full object-cover h-full object-center opacity-25 absolute inset-0" src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
            {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" /> */}
            {/* <img alt="gallery" class="w-full h-full object-center opacity-25 absolute inset-0" src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" /> */}
            <div class="text-center lg:w-2/3 w-full">
              <Clock class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'Asia/Singapore'} />
              {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1> */}
              <div class="flex justify-center">
                <Link to="/form">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register A Customer</button>
                </Link>
              </div>
            </div>
          </div>

        </section>
        <div className="developed-text">Built by TeckTrek</div>

      </>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(HomePage)));
