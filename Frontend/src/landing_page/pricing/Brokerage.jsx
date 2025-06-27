function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top mt-5 p-5">
        <div className="col-8 p-4 ">
          <h4 className="fs-5 text-center  ">
            <a href="" className="text-decoration-none ">
              Brokerage Calculator
            </a>
            <ul className="lh-lg text-muted text-start fs-6 mt-4">
              <li>
                Call & Trade and RMS auto-squaredff: Additional charges of ₹50 +
                GST per order.
              </li>

              <li>Digital contract notes will be sent via e-mail.</li>

              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>

              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>

              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>

              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </h4>
        </div>
        <div className="col-4 p-3">
          <h4 className="fs-5 text-center">
            <a href="" className="text-decoration-none ">
              List of Charges
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
