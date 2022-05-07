import styled from "@emotion/styled";
import { getAllPosts, Post } from "@main/lib";
import { test } from "@main/utils";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// import styles from "../styles/Home.module.css";

const TestComponent = styled.div`
  background-color: ${(props) => props.theme.color.primary};
`;

export interface HomePageProps {
  /** A list of all posts */
  allPosts: Post[];
}

const Home: NextPage<HomePageProps> = ({ allPosts }) => (
  <span>
    <TestComponent>{test}</TestComponent>
    <h1>Hello Next.js</h1>
  </span>
);

export default Home;

/**
 *
 */
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
