function Pricing() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href=""  style={{ textDecoration: "none" }}>
            See Pricing<i class="fa fa-long fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">&#8377;0</h1>
              <p>Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col  border p-3">
              <h1 className="mb-3">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
