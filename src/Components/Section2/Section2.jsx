import "./Section2.css";
import womanImg from "../../../public/woman.png"
function Section2() {
  return (
    <div className="father-part">
      <img src={womanImg} alt="woman img" className="image" />
      <div className="parts">
        <h1 className="cost">FREE SOME COST</h1>
        <h1 className="cost1">Save cost <br /> for you and <br /> family</h1>
        <h5 className="text">Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis ullamcorper eget ut.</h5>
        <h3 className="learning">Learn more➡️</h3>
      </div>
    </div>
  )
}

export default Section2;