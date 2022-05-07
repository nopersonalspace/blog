import styled from "@emotion/styled";
import { FlexColumnCenterBoth, NavBar } from "@main/components";
import { getAllPosts, getPostBySlug, markdownToHtml, Post } from "@main/lib";
import { StyleUtils } from "@main/utils";
import type { NextPage } from "next";
import React from "react";

export interface PostPageProps {
  /** post to display */
  post: Post;
}

const PostContainer = styled.div`
  margin: ${StyleUtils.Spacing.md};
  max-width: 800px;

  // Center all images
  img {
    display: block;
    margin: 0 auto;
  }
`;

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { title, date, content } = post;
  /* eslint-disable react/no-danger */
  return (
    <NavBar menuMode>
      <FlexColumnCenterBoth style={{ width: "100%" }}>
        <PostContainer>
          <h1>{title}</h1>
          <p>{date}</p>
          <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </PostContainer>
      </FlexColumnCenterBoth>
    </NavBar>
  );
  /* eslint-enable react/no-danger */
};
export default PostPage;

export const getStaticProps = async ({
  params,
}: {
  /** The params from the url */
  params: {
    /** The slug to display */
    slug: string;
  };
}): Promise<{
  /** props */
  props: {
    /** The to Display */
    post: Post;
  };
}> => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

/**
 * Get all the static paths of all posts
 */
export function getStaticPaths(): {
  /** The paths of all posts */
  paths: {
    /** The params from the url */
    params: {
      /** The slug to display */
      slug: string;
    };
  }[];
  /** If this is a fallback */
  fallback: boolean;
} {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
