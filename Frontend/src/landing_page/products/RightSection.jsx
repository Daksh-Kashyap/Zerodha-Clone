function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p className="lead">{productDescription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">Learn More</a>
          </div>
        </div>
        <div className="col-6 p-1">
          <img src={imageUrl} />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;
