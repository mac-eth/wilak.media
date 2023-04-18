import Date from 'components/utils/Date'
import Image from 'next/image'
import type { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'

const BlogListItem = ({ post }: { post: Post }) => {
  return (
    <a
      key={post.slug}
      href={post.slug}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          src={urlForImage(post.coverImage).height(1000).width(1000).url()}
          alt=""
          height={1000}
          width={1000}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <div className="text-gray-500">
            <Date dateString={post.date} />
          </div>
          <a
            href={post.category}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category}
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.slug}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <Image
              src={urlForImage(post.author.picture)
                .height(1000)
                .width(1000)
                .url()}
              alt=""
              width={1000}
              height={1000}
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={post.author.name}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogListItem
