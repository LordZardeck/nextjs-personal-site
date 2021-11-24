import 'highlight.js/styles/codepen-embed.css';

export default function GlobalStyles({}) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:ital,wght@0,400;1,500&display=swap"
                rel="stylesheet"/>
            <style global jsx>{`
              /* HTML5 display-role reset for older browsers */
              article,
              aside,
              details,
              figcaption,
              figure,
              footer,
              header,
              hgroup,
              menu,
              nav,
              section {
                display: block;
              }

              ol,
              ul {
                list-style: none;
              }

              * {
                box-sizing: border-box;
              }

              html, body {
                margin: 0;
              }

              body {
                font-family: 'IBM Plex Sans', sans-serif;
                background: #202126;
                font-size: 16px;
                padding-bottom: 50px;
              }


              @media (max-width: 900px) {
                body {
                  font-size: 14px;
                }
              }
            `}</style>
        </>
    );
}
