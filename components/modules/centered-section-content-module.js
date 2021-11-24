import ModuleDelegator from "../common/module-delegator";

export default function CenteredSectionContentModule({header, content, headerAlignment}) {
    return (
        <>
            <div className="section">
                {header && <h2 className={`headerAlign${headerAlignment}`}>{header}</h2>}
                <ModuleDelegator modules={content}/>
            </div>

            <style jsx>{`
              .section {
                padding: 50px 20px;
                max-width: 812px;
                margin: 0 auto;
                width: 100%;
              }

              .section h2 {
                font-family: IBM Plex Mono, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 31.905px;
                line-height: 34px;
                text-transform: uppercase;
                color: #69F5AB;
                border-bottom: 2px solid #69F5AB;
                margin-bottom: 40px;
              }

              .section h2:after {
                display: block;
                content: "";
                width: 155px;
                height: 7px;
                background: #69F5AB;
                position: relative;
                top: 9px;
              }

              .headerAlignRight {
                text-align: right;
              }

              .headerAlignRight:after {
                margin-left: auto;
              }

              @media (max-width: 900px) {
                .section {
                  padding: 20px;
                }

                .section h2 {
                  margin-bottom: 20px;
                  font-size: 1.4em;
                }
                
                .section h2:after {
                  width: 105px;
                  height: 4px;
                  top: 6px;
                }
              }
            `}</style>
        </>
    );
}
