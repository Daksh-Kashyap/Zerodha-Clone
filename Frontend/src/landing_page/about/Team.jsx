function Team() {
  return (
    <div className="container">
      <div className="row mt-5 border-top p-5">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-5 text-muted" style={{lineHeight:"1.8",fontSize:"1.2em"}}>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p >
            Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> /{" "}
            <a href="" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
