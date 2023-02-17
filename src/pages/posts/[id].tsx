import React, { Fragment } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const PostIdPage: NextPage = () => {
  const user = {
    name: "name",
    password: "password",
    id: 1,
  };

  const { password, ...rest } = user;
  const router = useRouter();
  return <Fragment>{JSON.stringify(rest)}</Fragment>;
};

export default PostIdPage;
