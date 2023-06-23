'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStoryblokApi } from '@storyblok/react'
import { BlokProps, Component } from '@/storyblock/components/types'

type Post = {
  name: string
  first_published_at: string
  content: { summary: string }
  slug: string
}

function usePostList(
  count: number,
  startDate: string,
  endDate: string,
  preloaded: Post[] = [],
) {
  const storyblokApi = useStoryblokApi()
  const [posts, setPosts] = useState(preloaded)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsPending(true)

      const {
        data: { stories },
      } = await storyblokApi.get('cdn/stories', {
        sort_by: 'first_published_at:desc',
        ...(startDate && { first_published_at_gt: startDate }),
        ...(endDate && { first_published_at_lt: endDate }),
        starts_with: 'blog',
        is_startpage: false,
        version: 'published',
        per_page: count,
      })

      if (stories instanceof Array) {
        setPosts(stories)
      }

      setIsPending(false)
    })()
  }, [count, startDate, endDate])

  return [posts, isPending] as const
}

type PostListItemProps = {
  title: string
  summary: string
  postedAt: string
  slug: string
}

function PostListItem({ title, summary, postedAt, slug }: PostListItemProps) {
  return (
    <>
      <Link href={'/' + slug}>
        <div className="postListItem">
          <div className="details">
            <h3>{title}</h3>
            <p>
              {summary.slice(0, 100)}
              {summary.length > 100 ? '...' : ''}
            </p>
          </div>
          <div className="actions">
            <div className="navigate">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faClock} />
              {new Date(postedAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .postListItem {
          border: 1px solid #000;
          height: 173px;
          width: 100%;
          display: flex;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .details {
          padding: 19px;
          flex: 1 1 0;
          border-right: 1px solid #000;
        }

        .details h3 {
          font-family: var(--font-plex-mono);
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 34px;
          text-transform: uppercase;
          color: #f5d669;
          margin-top: 2px;
        }

        .details p {
          font-family: var(--font-plex-sans);
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          color: #ffffff;
        }

        .actions {
          width: 78px;
          font-family: var(--font-plex-mono);
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .actions > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .actions :global(svg) {
          font-size: 24px;
        }

        .date :global(svg) {
          margin-bottom: 5px;
        }

        @media (max-width: 500px) {
          .postListItem {
            flex-direction: column;
            height: auto;
          }

          .details {
            padding: 9px;
            border-right: none;
            border-bottom: 1px solid #000;
          }

          .details h3 {
            font-size: 17px;
            line-height: 16px;
            letter-spacing: 1px;
          }

          .details p {
            font-size: 13px;
            line-height: 14px;
          }

          .actions {
            width: 100%;
            height: 30px;
            flex-direction: row-reverse;
            justify-content: space-between;
          }

          .actions > div {
            display: flex;
            padding: 7px 19px;
            flex-direction: row;
          }

          .actions > div > * {
            display: block;
          }

          .actions :global(svg) {
            font-size: 14px;
          }

          .date :global(svg) {
            margin-bottom: 0;
            margin-right: 5px;
          }
        }
      `}</style>
    </>
  )
}

type PostList = Component<
  { count: string; endData: string; startDate: string },
  'postList'
>

export function PostList({ blok }: BlokProps<PostList>) {
  const { startDate, endDate, count } = blok
  const [posts] = usePostList(Number(count), startDate, endDate)

  return (
    <>
      {posts.map(
        ({
          name: title,
          first_published_at: postedAt,
          content: { summary },
          slug,
        }) => (
          <PostListItem key={slug} {...{ title, summary, postedAt, slug }} />
        ),
      )}
    </>
  )
}
