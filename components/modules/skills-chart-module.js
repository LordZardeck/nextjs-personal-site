import {useEffect, useState} from "react";

export default function SkillsChartModule({profilePicture, skills, globalRotationOffset}) {
    const parsedGlobalRotationOffset = parseFloat(globalRotationOffset) || 0;
    const [viewportScale, setViewPortScale] = useState(1.0);

    useEffect(
        () => {
            function onResize() {
                setViewPortScale(window.outerWidth / 800);
            }

            window.addEventListener('resize', onResize);
            onResize();

            return () => window.removeEventListener('resize', onResize);
        },
        []
    );

    return (
        <>
            <div className="skillsChart" style={{'--viewportScale': viewportScale}}>
                <div className="chart">
                    <div className="picture">
                        <img src={profilePicture.filename} alt={profilePicture.alt}/>
                    </div>
                    <div className="pies">
                        {(() => {
                            const totalValue = skills.reduce((total, {value}) => total + (parseFloat(value) || 0), 0);

                            const [, result] = skills.reduce(
                                ([sumValue, elements], {name, value, color, logo, logoOffset}, index) => {
                                    const parsedValue = parseFloat(value) || 0;
                                    // Calculate the offset as a percentage of the available rotation space, starting at -90deg
                                    const rotOffset = (((parsedValue / totalValue) * 360) - 4) * (Math.max(0, Math.min(100, logoOffset)) / 100) - 90;


                                    return ([
                                        parsedValue + sumValue,
                                        [
                                            ...elements,
                                            <div key={name} className="pie no-round" style={{
                                                '--p': ((parsedValue / totalValue) * 100) + (skills.length === 1 ? 1 : 0),
                                                '--c': color,
                                                '--r': index > 0 ? `${((sumValue / totalValue) * 360) + parsedGlobalRotationOffset}deg` : `${parsedGlobalRotationOffset}deg`,
                                            }}>
                                                {
                                                    logo.id && <>
                                                        <div className="logo"
                                                             style={{'--rotOffset': `${rotOffset}deg`}}>
                                                            <img src={logo.filename} alt={logo.alt}/>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        ]
                                    ]);
                                },
                                [0, []]
                            );

                            return result;
                        })()}
                    </div>
                </div>
            </div>

            <style jsx>{`
              .skillsChart {
                --viewportScale: 0.5;
              
                padding: 100px 20px;
                max-width: 772px;
                margin: 0 auto;
                width: 100%;
              }

              @media (max-width: 800px) {
                .skillsChart {
                  transform: scale(var(--viewportScale));
                }
              }

              @media (max-width: 600px) {
                .skillsChart {
                  padding: 40px 20px;
                }
              }

              .chart {
                position: relative;
                margin: 0 auto;
                width: 266px;
              }

              .picture {
                position: absolute;
                top: 13px;
                left: 13px;
                width: 240px;
                height: 240px;
                overflow: hidden;
                border-radius: 100%;
                box-shadow: 0 0 0 4.5px #202126;
                z-index: 1;
              }

              .picture img {
                width: 100%;
              }

              .pie {
                --p: 20; /* the percentage */
                --b: 8px; /* the thickness */
                --c: darkred; /* the color */
                --w: 266px; /* the size*/
                --r: 0deg;

                width: var(--w);
                aspect-ratio: 1/1;
                position: relative;
                display: inline-grid;
                place-content: center;
                font-size: 25px;
                font-weight: bold;
                font-family: sans-serif;
                transform: rotate(var(--r));
              }

              .pie:before,
              .pie:after {
                content: "";
                position: absolute;
                border-radius: 50%;
              }

              .pie:before {
                inset: 0;
                background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat, conic-gradient(var(--c) calc((var(--p) - 1) * 1%), #0000 0);
                -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
                mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
              }

              .pie:after {
                inset: calc(50% - var(--b) / 2);
                background: var(--c);
                transform: rotate(calc(var(--p) * 3.6deg - 90deg)) translate(calc(var(--w) / 2 - 50%));
              }

              .animate {
                animation: p 1s .5s both;
              }

              .no-round:before {
                background-size: 0 0, auto;
              }

              .no-round:after {
                content: none;
              }

              .pies {
                position: relative;
                width: 266px;
                height: 266px;
              }

              .pies .pie {
                position: absolute;
              }

              .pie .logo {
                --rotOffset: -1deg;

                width: 270px;
                position: absolute;
                box-shadow: none;
                background: none;
                border: transparent;
                border-bottom: 2px solid var(--c);
                margin: 0;
                top: 50%;
                left: 50%;
                transform: rotate(var(--rotOffset));
                transform-origin: left;
                z-index: -1;
              }

              .pie img {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(50%, -50%) rotate(calc((var(--r) * -1) - var(--rotOffset)));
              }
            `}</style>
        </>
    );
}
