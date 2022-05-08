import styled from "@emotion/styled";
import { Post } from "@main/lib";
import { useRouterLoading } from "@main/utils";
import { useRouter } from "next/router";
import React from "react";

import { Button } from "./Button";

export const StyledHeroContainer = styled.div<{
  /** The Background image to use */
  backgroundImage: string;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  padding: 20px 10px 20px 10px;
  border-radius: ${({ theme }) => theme.radii.default};
`;

export interface HeroPostProps {
  /** The post to feature */
  post: Post;
}

export const HeroPost: React.FC<HeroPostProps> = ({ post }) => {
  const router = useRouter();

  const { loading } = useRouterLoading();

  return (
    <StyledHeroContainer backgroundImage={post.coverImage}>
      <div style={{ maxWidth: "600px" }}>
        <h1>{post.title}</h1>
        <h3>{post.excerpt}</h3>
        <Button
          loading={loading}
          onClick={() => router.push(`/posts/${post.slug}`)}
        >
          Read More
        </Button>
      </div>
    </StyledHeroContainer>
  );
};
