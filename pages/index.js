import React from "react";
import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const index = () => {
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </DefaultLayout>
  );
};

export default index;
