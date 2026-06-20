import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar container'>
      <div className="navbar__logo">
        <h1><span>x</span> pense</h1>
      </div>
      <div className="navbar__links">
        <a href="">Features</a>
        <a href="">About us</a>
        <a href="">Pricing</a>
        <a href="">Feedback</a>
      </div>
      <div className="navbar__button">
        <button>Request demo</button>
      </div>
    </div>
  )
}

export default Navbar;