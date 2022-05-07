import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { Fields,Post } from './apiTypes'

const postsDirectory = join(process.cwd(), '_posts')

/**
 * Get all of the slugs (filenames) for the posts in the posts directory.
 *
 * @returns - an array of slugs
 */
export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory)

/**
 * @param slug - The slug to get the post for
 * @param fields - The fields to get for the post
 * @returns - The post
 */
export const getPostBySlug = (slug: string, fields: Fields[] = []): Post => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath =  join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        content,
        ...data
    } as Post

}

/**
 * @param fields - The fields to get for the posts
 * @returns - An array of posts
 */
export const getAllPosts = (fields: Fields[] = []): Post[] => {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
