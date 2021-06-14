import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import userRouter from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jokeQuery = context.query.category;
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${jokeQuery}`
  );
  const joke = await response.json();

  return {
    props: {
      joke: joke.value,
    },
  };
};

const RandomChuckNorrisJoke: React.FC<{ joke: string }> = ({ joke }) => {
  return <div>{joke}</div>;
};
export default RandomChuckNorrisJoke;
