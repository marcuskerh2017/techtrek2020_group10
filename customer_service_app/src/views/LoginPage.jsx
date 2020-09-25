/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import auth from "../components/Auth";

const LoginPage = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const url = "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login";

  function handleSubmitForm(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        auth.login(() => {
          props.history.push("/home");
        });
        console.log(`isAuthenticated state : ${auth.isAuthenticated()}`);
        window.localStorage.setItem("token", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(`username : ${username} , password : ${password}`);
  return (
    <>
      <Header />
      <section class="text-gray-700 body-font w-full h-screen">
        <div class="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
          {/* <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}
          <form class="bg-white shadow-lg rounded-lg px-8 py-8 w-1/3 h-auto space-y-10">
            <div class="mb-4">
              <label
                class="float-left block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {
                  console.log("Value : ", e.target.value);
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 float-left"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                value={password}
                onChange={(e) => {
                  console.log("Value : ", e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                onClick={handleSubmitForm}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

LoginPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(LoginPage);
