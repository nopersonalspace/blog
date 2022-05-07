export interface Post {
    /** id */
    slug: string;
    /** title */
    title: string;
    /** date */
    date: string;
    /** author */
    author: string;
    /** cover image url */
    coverImage: string;
    /** exerpt */
    excerpt: string;
    /** html content */
    content: string;
}

/**
 * Fields of a Post
 */
export type Fields = keyof Post;
