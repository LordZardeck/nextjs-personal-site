import Link from 'next/link'
import {
  StyledDate,
  StyledPostActions,
  StyledPostDetails,
  StyledPostListItem,
} from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons'

export type PostListItemProps = {
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
      <Link href={'/' + slug}>
        <StyledPostListItem>
          <StyledPostDetails>
            <h3>{title}</h3>
            <p>
              {summary.slice(0, 100)}
              {summary.length > 100 ? '...' : ''}
            </p>
          </StyledPostDetails>
          <StyledPostActions>
            <div className="navigate">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <StyledDate>
              <FontAwesomeIcon icon={faClock} />
              {new Date(postedAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </StyledDate>
          </StyledPostActions>
        </StyledPostListItem>
      </Link>
    </>
  )
}
