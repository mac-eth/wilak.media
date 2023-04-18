import { Post, Settings } from 'lib/sanity.queries'
import { getAllPosts, getSettings } from 'lib/sanity.client'

import BlogList from 'components/blog/BlogList'
import { GetStaticProps } from 'next'
import IndexPage from 'components/IndexPage'

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

const Blogs = (props: PageProps) => {
  const { posts } = props

  return <BlogList posts={posts} />
}

export default Blogs

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
