import React, { useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  const fetcher = await fetch(`https://api.github.com/repos/quelchx/aos-vue`);
  const json = await fetcher.json();
  return json;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["key"], fetcher);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Test: NextPage = () => {
  const queryClient = new QueryClient();
  const { data, isLoading, isError } = useQuery(["key"], fetcher, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const mutation = async (id: string) => {
    // delete function to backend here
    queryClient.invalidateQueries(["key"]);
  };
  const [hide, setHide] = React.useState(false);
  useEffect(() => {}, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Test;
