import {useState, useEffect, useRef} from "react";

export default function Navigation({page, preview}) {
    return (
        <>
            <div className="navigation">
                <ul className="links">
                    <li><a target="_blank" href="https://github.com/LordZardeck">Code</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>

            <style jsx>{`
              .navigation {
                position: sticky;
                top: 0;
                width: 100%;
                height: 60px;
                background: #202126;
                border-bottom: 1px solid #000;
                z-index: 100;
              }

              .links {
                margin: 0;
                padding: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .links a {
                color: #69F5AB;
                font-family: IBM Plex Mono, sans-serif;
                font-size: 18px;
                line-height: 23px;
                text-align: center;
                list-style: none;
                text-decoration: none;
                padding: 0 20px;
              }

              .links a:hover {
                text-decoration: underline;
              }
            `}</style>
        </>
    );
}
