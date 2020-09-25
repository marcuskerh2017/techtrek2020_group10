import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../components/Auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(`isAuthenticated state : ${auth.isAuthenticated()}`);
  console.log(window.localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.localStorage.getItem("token") !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
