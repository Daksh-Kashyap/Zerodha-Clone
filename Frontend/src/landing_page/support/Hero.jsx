function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a href="" className=" text-white text-decoration-underline">
          Track Tickets
        </a>
      </div>
      <div className="row mt-4 px-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-4 mb-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. How do i activate F&O" /><br/>
          <div className="link-group">
          <a href="" className="text-white">Track account opening</a>
          <a href="" className="text-white">Track segment activation</a>
          <a href="" className="text-white">Intraday margins</a>
          <a href="" className="text-white">Kite user manual</a>
          </div>
        </div>
        <div className="col-6  p-5 ">
          <h1 className="fs-4 mb-3 p-2">Featured</h1>
          <ol className="lh-lg">
            <li><a href="" className="text-white">Surveillance measure on scrips - June 2025</a></li>
            <li><a href="" className="text-white">Offer for sale (OFS) – June 2025</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
