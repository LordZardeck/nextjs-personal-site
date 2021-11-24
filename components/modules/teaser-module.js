export default function TeaserModule({headline}) {
  return (
    <>
      <div className="teaser">
        <p>{headline}</p>
      </div>

      <style jsx>{`
        .teaser {
          padding: 100px 20px;
          max-width: 772px;
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </>
  );
}
