import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons'
import * as ListItem from './Styled'

type PostListItemProps = {
  title: string
  summary: string
  postedAt: string
  slug: string
}

export function PostListItem({
  title,
  summary,
  postedAt,
  slug,
}: PostListItemProps) {
  return (
    <>
      <Link
        href={'/' + slug}
        prefetch={process.env.NEXT_PUBLIC_STORYBLOK_VERSION !== 'draft'}
      >
        <ListItem.Item>
          <ListItem.Details>
            <h3>{title}</h3>
            <p>
              {summary.slice(0, 100)}
              {summary.length > 100 ? '...' : ''}
            </p>
          </ListItem.Details>
          <ListItem.Actions>
            <div className="navigate">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <ListItem.Date>
              <FontAwesomeIcon icon={faClock} />
              {new Date(postedAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </ListItem.Date>
          </ListItem.Actions>
        </ListItem.Item>
      </Link>
    </>
  )
}
