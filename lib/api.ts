import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { Post } from "./apiTypes";

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    ...data,
  } as Post;
};

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
