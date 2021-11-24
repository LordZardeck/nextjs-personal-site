import ModuleDelegator from "../common/module-delegator";

export default function BlogPostModule({body, featured_image, title}) {
    return (
        <>
            <div className="page">
                {featured_image && <img className="featuredImage" src={featured_image} alt="featured-image"/>}
                <h1>{title}</h1>
                <ModuleDelegator modules={body}/>
            </div>
            <style jsx>{`
              .featuredImage {
                width: 100%;
                margin-bottom: 100px;
              }

              h1 {
                color: #F5D669;
                text-align: center;
                font-size: 60px;
                max-width: 1024px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding: 0 20px;
              }
              
              @media (max-width: 900px) {
                .featuredImage {
                  margin-bottom: 30px;
                }
              
                h1 {
                  font-size: 40px;
                }
              }
            `}</style>
        </>
    );
}