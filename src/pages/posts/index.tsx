import React, { useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { useUser } from "@/store/useStore";
import { useRouter } from "next/router";

const PostPage: NextPage = () => {
  const { user, login } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  const handleLogin = () => {
    login({
      id: "1",
      name: "name",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <Link href="/">Home</Link>
    </div>
  );
};

export default PostPage;
