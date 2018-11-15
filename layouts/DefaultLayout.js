import React from "react";
import PageHeader from "../components/PageHeader";

const layoutStyle = {
  padding: 20
};

const DefaultLayout = props => {
  return (
    <div style={layoutStyle}>
      <PageHeader />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
