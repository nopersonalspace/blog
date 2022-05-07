import {
  Card,
  FlexColumnCenterHorizontal,
  HeroPost,
  NavBar,
} from "@main/components";
import { getAllPosts, Post } from "@main/lib";
import type { NextPage } from "next";
import { useRouter } from "next/router";

export interface HomePageProps {
  /** A list of all posts */
  allPosts: Post[];
}

const Home: NextPage<HomePageProps> = ({ allPosts }) => {
  const router = useRouter();

  return (
    <div>
      <NavBar>
        <div style={{ margin: "8px" }}>
          <HeroPost post={allPosts[0]} />
          <FlexColumnCenterHorizontal>
            {allPosts.map((post, key) => (
              <Card
                key={key}
                style={{ maxWidth: "300px" }}
                onClick={() => router.push(`/posts/${post.slug}`)}
              >
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Card>
            ))}
          </FlexColumnCenterHorizontal>
        </div>
      </NavBar>
    </div>
  );
};

export default Home;

export const getStaticProps = (): {
  /** Pass in posts as props */
  props: {
    /** All posts */
    allPosts: Post[];
  };
} => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
