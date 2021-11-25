import {useEffect, useState} from "react";
import storyblok from "../../lib/storyblok";
import Link from 'next/link';
import {faArrowRight, faClock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function usePostList(count, startDate, endDate) {
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(false);

    useEffect(
        () => {
            (async () => {
                setIsPending(true);

                const {data: {stories}} = await storyblok.getList('blog', count, startDate, endDate);

                if (stories instanceof Array) {
                    setPosts(stories);
                }

                setIsPending(false);
            })();
        },
        [count, startDate, endDate]
    );

    return [posts, isPending];
}

function PostListItem({title, summary, postedAt, slug}) {
    return (
        <>
            <Link href={'/' + slug}>
                <div className="postListItem">
                    <div className="details">
                        <h3>{title}</h3>
                        <p>{summary.slice(0, 100)}{summary.length > 100 ? '...' : ''}</p>
                    </div>
                    <div className="actions">
                        <div className="navigate"><FontAwesomeIcon icon={faArrowRight}/></div>
                        <div className="date">
                            <FontAwesomeIcon icon={faClock}/>
                            {(new Date(postedAt)).toLocaleString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
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
                font-family: IBM Plex Mono, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 34px;
                text-transform: uppercase;
                color: #F5D669;
                margin-top: 2px;
              }

              .details p {
                font-family: IBM Plex Sans, sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;
                color: #FFFFFF;
              }

              .actions {
                width: 78px;
                font-family: IBM Plex Mono, sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
                color: #FFFFFF;
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
    );
}

export default function PostListModule({count, startDate, endDate}) {
    const [posts] = usePostList(count, startDate, endDate);

    return (
        <>
            {posts.map(({name: title, first_published_at: postedAt, content: {summary}, slug}) =>
                <PostListItem key={slug} {...{title, summary, postedAt, slug}}/>)}
        </>
    );
}
