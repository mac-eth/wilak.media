import { Blog, Settings } from 'lib/sanity.queries'
import { getAllBlogs, getSettings } from 'lib/sanity.client'

import BlogList from 'components/blog/BlogList'
import { GetStaticProps } from 'next'

interface PageProps {
  blogs: Blog[]
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
  const { blogs } = props

  return <BlogList blogs={blogs} />
}

export default Blogs

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, blogs = []] = await Promise.all([
    getSettings(),
    getAllBlogs(),
  ])

  return {
    props: {
      blogs,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
