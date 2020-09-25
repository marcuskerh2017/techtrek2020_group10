/* eslint-disable react/state-in-constructor */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    height: "100vh",
    background: "#FCFBFE",
  },
});

class FormPage extends Component {
  state = {
    loading: true,
    customerName: "",
    customerAge: "",
    serviceOfficerName: "",
    nric: "",
    registrationTime: "",
    branchCode: "",
    image: "",
    productType: "",
  };

  

  render() {
    const handleFormSubmit = async (e) => {
      // form handler
    }

    return (
      <>
        <div class="bg-gray-200 min-h-screen pt-2 font-mono my-16">
          <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
              <form class="mt-6">
                <div class='flex flex-wrap -mx-3 mb-6'>
                  <div class="personal w-full border-t border-gray-400 pt-4">
                    <h2 class="text-2xl text-gray-900">Customer Info:</h2>
                    <div class="flex items-center justify-between mt-4">
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Customer name</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Service Officer Name</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >NRIC</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Customer Age</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Registration Time</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Branch Code</label>
                        <div class="flex-shrink w-full inline-block relative">
                          <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>choose ...</option>
                            <option>7177</option>
                            <option>8100</option>
                            <option>2300</option>
                            <option>2911</option>
                          </select>
                          <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Image</label>
                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                      <div class='w-full md:w-1/2 px-3 mb-6'>
                        <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Product Type</label>
                        <div class="flex-shrink w-full inline-block relative">
                          <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>choose ...</option>
                            <option>137 : Investor</option>
                            <option>070 : Insurance</option>
                            <option>291 : Loans</option>
                            <option>969 : Savings</option>
                            <option>555 : Credit Cards</option>
                          </select>
                          <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

FormPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(FormPage)));
