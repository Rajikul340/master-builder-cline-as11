import React from "react";
import useTitle from "../useTitle/useTitle";

const ErrorPage = () => {
  useTitle("errorpage");
  return (
    <div className="text-xl font-semibold text-center ">
      <h4>page not found</h4>
      <h4>404</h4>
    </div>
  );
};

export default ErrorPage;
