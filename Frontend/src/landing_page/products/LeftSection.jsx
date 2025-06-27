function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-1">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5 ">
          <h1 >{productName}</h1>
          <p className="lead">{productDescription}</p>

          <div className="mt-3 p-2">
            <a href={tryDemo} className="text-decoration-none">
              Trydemo
            </a>
            <a href={learnMore} className="ms-5 text-decoration-none">
              learnMore
            </a>
          </div>
          <div className="mt-3 p-1">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="ms-5"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
