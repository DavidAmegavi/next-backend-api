import styles from "../styles/Home.module.css";
import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categoriesList = await response.json();

  return {
    props: { categoriesList },
  };
};

const ChuckNorrisCategoriesJoke: React.FC<{ categoriesList: string[] }> = ({
  categoriesList,
}) => {
  return (
    <div>
      <ul>
        {categoriesList.map((category, index) => {
          return (
            <Link href={`/categories/${category}`} key={index}>
              <li>
                <a>{category}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ChuckNorrisCategoriesJoke;
