import { CodingArticle, Section } from '@/components'

export default function ComponentsPage() {
  return (
    <Section.Alternate>
      <Section.Centered as="div">
        <CodingArticle.List>
          <CodingArticle.Item
            href="/blog"
            icon={<CodingArticle.CodeIcon />}
            title="How to Setup Local Development of Facebook's Real-Time API"
            date="Jan 21, 2016"
          >
            {
              "Developing against facebook's real-time webhooks requires a static url utilizing SSL. This may seem ..."
            }
          </CodingArticle.Item>
          <CodingArticle.Item
            href="/blog"
            icon={<CodingArticle.CodeIcon />}
            title="PhantomJS 2 in TravisCI"
            date="Jan 21, 2016"
          >
            {
              "PhantomJS 2 doesn't work out of the box with Travis, today I figured out how"
            }
          </CodingArticle.Item>
          <CodingArticle.Item
            href="/blog"
            icon={<CodingArticle.CodeIcon />}
            title="PhantomJS 2 in TravisCI"
            date="Jan 21, 2016"
          >
            {
              "PhantomJS 2 doesn't work out of the box with Travis, today I figured out how"
            }
          </CodingArticle.Item>
        </CodingArticle.List>
      </Section.Centered>
    </Section.Alternate>
  )
}
