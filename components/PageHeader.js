import React from "react";
import Link from "next/link";

const headerSmallStyle = {
  fontSize: 16
};
const linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

const PageHeader = props => {
  return (
    <div className="PageHeader">
      <hr />
      <p>
        <strong>Next.js Sandbox</strong>
      </p>
      <nav>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </nav>
      <hr />
    </div>
  );
};

export default PageHeader;
