import { ChildComponents } from '@/storyblock/components/ChildComponents'
import { BlokProps, Component } from '@/storyblock/components/types'

type PageBlok = Component<
  {
    body: Component<unknown>[]
  },
  'page'
>

export function BlogPost({ blok }: BlokProps<PageBlok>) {
  // const router = useRouter()
  //
  // const disqusShortname = 'seantempletonwebdeveloper'
  // const disqusConfig = {
  //   url: 'https://templeton.io' + router.asPath,
  //   identifier: _uid, // Single post id
  //   title: title, // Single post title
  // }

  console.log(blok)

  return (
    <>
      <div className="page">
        <div
          className={`wrapper ${blok.languages.length > 0 && 'hasLanguages'}`}
        >
          <div className="content">
            {blok.featured_image && (
              <img
                className="featuredImage"
                src={blok.featured_image}
                alt="featured-image"
              />
            )}
            <h1 className="articleTitle">{blok.short_title}</h1>
            <ChildComponents bloks={blok.body} />
            {/*<CenteredSection>*/}
            {/*  <DiscussionEmbed*/}
            {/*    shortname={disqusShortname}*/}
            {/*    config={disqusConfig}*/}
            {/*  />*/}
            {/*</CenteredSection>*/}
          </div>
        </div>
      </div>
      <style jsx>{`
        .featuredImage {
          width: 100%;
          margin-bottom: 100px;
        }

        h1.articleTitle {
          color: #f5d669;
          text-align: center;
          font-size: 60px;
          max-width: 1024px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
        }

        .wrapper {
          display: flex;
        }

        .content {
          order: 1;
          flex: 1 1 100%;
          width: calc(100% - 180px);
        }

        .title {
          order: 2;
          border-left: 2px solid #000;
          flex: 0 0 90px;
          width: 90px;
        }

        .social {
          order: 0;
          border-right: 2px solid #000;
          flex: 0 0 90px;
        }

        .title span {
          display: block;
          color: #fff;
          text-transform: uppercase;
          font-size: 40px;
          max-width: 1024px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          writing-mode: vertical-rl;
          height: calc(100vh - 110px);
          transform: rotate(180deg);
          padding: 20px 17px 0 0;
          text-align: left;
          position: sticky;
          top: 60px;
          background: #202126;
        }

        .hasLanguages .title:before {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-top: 88px solid transparent;
          border-bottom: 88px solid transparent;
          border-right: 88px solid #000;
          top: 22px;
          right: 2px;
        }

        .hasLanguages .title:after {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-top: 88px solid transparent;
          border-bottom: 88px solid transparent;
          border-right: 88px solid #202126;
          top: 22px;
        }

        .hasLanguages .social:before {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-top: 88px solid transparent;
          border-bottom: 88px solid transparent;
          border-left: 88px solid #000;
          top: 22px;
          left: 2px;
        }

        .hasLanguages .social:after {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-top: 88px solid transparent;
          border-bottom: 88px solid transparent;
          border-left: 88px solid #202126;
          top: 22px;
        }

        .social ul {
          height: calc(100vh - 60px);
          background: #202126;
          padding: 0;
          margin: 0;
          z-index: 1;
          position: sticky;
          top: 60px;
        }

        .languages {
          margin: 0;
          padding: 0;
          display: flex;
          height: 50px;
          border-bottom: 1px solid #000;
        }

        .languages li {
          flex: 1 1 auto;
        }

        .languages :global(.php) {
          background: #b769f5;
        }

        .languages :global(.javascript) {
          background: #f5e969;
        }

        .languages :global(.reactjs) {
          background: #00c2e5;
        }

        .languages :global(.laravel) {
          background: #f56969;
        }

        .languages :global(.magento) {
          background: #f07948;
        }

        .languages :global(.bigcommerce) {
          background: #8769f5;
        }

        .languages :global(.nodejs) {
          background: #4c9f44;
        }

        @media (max-width: 900px) {
          .featuredImage {
            margin-bottom: 30px;
          }

          h1.articleTitle {
            font-size: 40px;
          }

          .title,
          .social {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
