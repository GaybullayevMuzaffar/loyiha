import "./Section1.css";
import illustration from "../../../public/Illustrator.png";

function Section1() {
  return (
    <section className="section1">
      <div className="container">
        <div className="section">
          <div className="section1-left">
            <p className="kicker">Always online</p>
            <h1 className="hero-title">Real-time<br />support<br />with cloud</h1>
            <p className="hero-desc">Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis ullamcorper eget ut.</p>
            <h4 className="learn-more" href="#">Learn more <span className="arrow">➡️</span></h4>
          </div>

          <div className="section1-right">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;