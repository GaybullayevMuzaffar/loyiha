import "./Hero.css";
import heroImg from "../../assets/Illustration.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-left">
        <h1>Track your Expenses & Save Money</h1>
        <p>Helps you to organize your income and expenses</p>
        <div className='hero-left__bottom'>
          <button>Try free demo</button>
          <span>— Web, iOS and Android</span>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero;