import {marked, Renderer} from "marked";
import hljs from 'highlight.js';

const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};

function escapeForHTML(input) {
    return input.replace(/([&<>'"])/g, char => escapeMap[char]);
}

// Create your custom renderer.
const renderer = new Renderer();
renderer.code = (code, language) => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && hljs.getLanguage(language));

    // Highlight only if the language is valid.
    // highlight.js escapes HTML in the code, but we need to escape by ourselves
    // when we don't use it.
    const highlighted = validLang
        ? hljs.highlight(language, code).value
        : escapeForHTML(code);

    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

// Set the renderer to marked.
marked.setOptions({renderer});

export default function TextModule({content}) {
    return (
        <>
            <div className="text" dangerouslySetInnerHTML={{__html: marked.parse(content)}}/>

            <style jsx>{`
              .text {
                font-family: IBM Plex Sans, sans-serif;
                font-style: normal;
                font-weight: normal;
                color: #fff;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: 0.04em;
              }

              .text :global(p) {
                margin: 35px 0;
                letter-spacing: 0.7px;
                line-height: 1.4;
              }

              .text :global(h2) {
                color: #69F5AB;
                text-transform: uppercase;
                border-bottom: 2px solid #69F5AB;
                margin: 90px 0 40px;
              }

              .text :global(h2:after) {
                display: block;
                content: "";
                width: 155px;
                height: 7px;
                background: #69F5AB;
                position: relative;
                top: 9px;
              }

              .text :global(h2:nth-of-type(2n)) {
                text-align: right;
              }

              .text :global(h2:nth-of-type(2n):after) {
                margin-left: auto;
              }

              .text :global(pre code) {
                padding: 2em;
                border: 1px solid #000;
                letter-spacing: initial;
                font-family: IBM Plex Mono, sans-serif;
                line-height: initial;
              }

              .text :global(img) {
                max-width: 100%;
                margin: 0 auto;
              }

              @media (max-width: 900px) {
                .text :global(h2) {
                  margin: 40px 0 20px;
                  font-size: 1.4em;
                }

                .text :global(h2:after) {
                  width: 105px;
                  height: 4px;
                  top: 6px;
                }
              }
            `}</style>
        </>
    );
}
