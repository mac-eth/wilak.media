import type { Blog } from 'lib/sanity.queries'
import BlogListItem from 'components/blog/BlogListItem'

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogs.map((blog) => (
              <BlogListItem key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList
