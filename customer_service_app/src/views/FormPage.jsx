import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Select from "react-select";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import ImageLoader from 'react-image-file';

const styles = (theme) => ({
  root: {
    height: "100vh",
    background: "#FCFBFE",
  },
});

export const getValuesFromObjectArray = (arr) => arr.map((item) => item.value);

class FormPage extends Component {
  state = {
    customerName: "",
    serviceOfficerName: "",
    customerAge: 0,
    nric: "",
    registrationTime: new Date().toLocaleString(),
    branchCode: 7177,
    image: "",
    productType: null,
    url: "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/validateForm",
    typeData: [
      { name: "137 : Investor", _id: 1 },
      { name: "070 : Insurance", _id: 2 },
      { name: "291 : Loans", _id: 3 },
      { name: "969 : Savings", _id: 4 },
      { name: "555: Credit Cards", _id: 5 },
    ],
    branchData: [
      { name: "3243", _id: 1 },
      { name: "234", _id: 2 },
      { name: "23432", _id: 3 },
      { name: "12321", _id: 4 },
      { name: "23432", _id: 5 },
    ],
    file: []
  };

  parseRolesData = (data) =>
    data.map((item) => {
      const obj = {};
      obj.label = item.name;
      obj.value = item.name;
      obj.id = item.name;
      return obj;
    });

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSelectChange = (name) => (selectedOption) => {
    this.setState({ [name]: selectedOption });
  };

  async componentDidMount() {
    // on form load
    this.setState({
      typeData: this.parseRolesData(this.state.typeData),
      branchData: this.parseRolesData(this.state.branchData),
    });
  }

  render() {
    const handleFormSubmit = async (e) => {
      // form handler
      e.preventDefault();
      // console.log(this.state.customerName)
      // console.log(parseInt(this.state.customerAge))
      // console.log(this.state.serviceOfficerName)
      // console.log(this.state.nric)
      // console.log(this.state.registrationTime.slice(0,8) + ' 0' + this.state.registrationTime.slice(11,18))
      // console.log(parseInt(this.state.branchCode.value))
      // console.log(getValuesFromObjectArray(this.state.productType))

      fetch(this.state.url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Key": "yihengfang",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({
          customerName: this.state.customerName,
          customerAge: parseInt(this.state.customerAge),
          serviceOfficerName: this.state.serviceOfficerName,
          NRIC: this.state.nric,
          registrationTime: this.state.registrationTime.slice(0, 8) + ' 0' + this.state.registrationTime.slice(11, 18),
          branchCode: parseInt(this.state.branchCode.value),
          image: new Blob(["<html>…</html>"], { type: 'text/html' }),
          productType: getValuesFromObjectArray(this.state.productType),
        }),
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleBack = async (e) => {
      e.preventDefault();
      this.props.history.push("/home");
    };

    return (
      <>
        <img alt="gallery" style={{ zIndex: -5 }} class="w-auto object-cover h-auto object-center opacity-25 absolute inset-0" src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
        <div class=" min-h-screen pt-2 font-mono">
          <HeaderHome />
          <div class="container mx-auto">
            <div class="flex bg-gray-200 px-4 rounded-lg text-center relative">
              <div class="inputs w-full max-w-2xl p-6 mx-auto flex flex-col items-center justify-center">
                <form class="mt-6">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="personal w-full border-t border-gray-400 pt-4">
                      <h2 class="text-2xl text-gray-900">Customer Info:</h2>
                      <div class="flex items-center justify-between mt-4">
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Customer name
                        </label>
                          <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            value={this.state.customerName}
                            onChange={this.handleChange("customerName")}
                          />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Service Officer Name
                        </label>
                          <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            value={this.state.serviceOfficerName}
                            onChange={this.handleChange("serviceOfficerName")}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            NRIC
                        </label>
                          <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            value={this.state.nric}
                            onChange={this.handleChange("nric")}
                          />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Customer Age
                        </label>
                          <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            value={this.state.customerAge}
                            onChange={this.handleChange("customerAge")}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Registration Time
                        </label>
                          <input
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                            type="text"
                            value={this.state.registrationTime}
                          />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Branch Code
                        </label>
                          <div class="flex-shrink w-full inline-block relative">
                            <Select
                              value={this.state.branchCode}
                              onChange={this.handleSelectChange("branchCode")}
                              options={this.state.branchData}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              isClearable
                            />
                            <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Image
                        </label>
                          <ImageLoader alt='some text' />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Product Type
                        </label>
                          <div class="flex-shrink w-full inline-block relative">
                            <Select
                              value={this.state.productType}
                              onChange={this.handleSelectChange("productType")}
                              options={this.state.typeData}
                              isMulti
                              className="basic-multi-select"
                              classNamePrefix="select"
                              isClearable
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <button
                        class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                        type="submit"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      <button
                        class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                        type="submit"
                        onClick={handleFormSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

FormPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(FormPage));
