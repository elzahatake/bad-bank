function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand active" aria-current="true" href="#">
      <img src="bank-logo.png" alt="logo" width="70" height="73" className="d-inline-block align-text-top"></img>
    </a>
  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link px-4" title="Create an awesome $ bucket" href="#/createaccount/" >CREATE ACCOUNT</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link px-4" title="Login to your awesome $ bucket" href="#/login/">LOGIN</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link px-4" title="Deposit lots and lots of $" href="#/deposit/">DEPOSIT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4" title="Withdraw little bit of $" href="#/withdraw/">WITHDRAW</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4" title="$" href="#/balance/">BALANCE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4" title="All the $ data" href="#/alldata/">ALL DATA</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}