import React from "react";
import { withRouter } from "next/router";
import DefaultLayout from "../layouts/DefaultLayout";

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>Lorem ipsum dolor sit</p>
  </div>
));

const post = props => {
  return (
    <DefaultLayout>
      <Content />
    </DefaultLayout>
  );
};

export default post;
