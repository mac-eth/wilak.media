import * as demo from 'lib/demo.data'

import type { NextRequest, NextResponse } from 'next/server'
import { OpenGraphImage, height, width } from 'components/utils/OpenGraphImage'
import { Settings, settingsQuery } from 'lib/sanity.queries'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'

import { ImageResponse } from '@vercel/og'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'

export const config: PageConfig = { runtime: 'experimental-edge' }


export default async function og(req: NextRequest, res: NextResponse) {
  const font = fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
  const { searchParams } = new URL(req.url)

  let title = searchParams.get('title')
  if (!title) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
    const settings = (await client.fetch<Settings>(settingsQuery)) || {}
    title = settings?.ogImage?.title
  }

  return new ImageResponse(
    <OpenGraphImage title={title || demo.ogImageTitle} />,
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter',
          data: await font,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
