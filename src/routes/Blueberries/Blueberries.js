import { memo } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./Blueberries.css";
import { ReactComponent as DownloadButton  } from "../../assets/images/Download on the App Store Badge (Black).svg";

function Blueberries() {
  useTitle("TechnologyGoat - Blueberries");

  return (
    <div className="blueberries">
      <div className="app">
        <img src={require("../../assets/images/apps/Blueberries App Icon.png")} />
        <div>
          <h4>Blueberries</h4>
          <p>Focus Timer</p>
          <p className="price">$2.99</p>
        </div>
      </div>
      <Link className="downloadButton" to="https://apps.apple.com/us/app/blueberries-focus-timer/id6448134032">
        <DownloadButton />
      </Link>
      <div id="privacyAndPolicy">
        <h5>Privacy and Policy</h5>
        <p>We do not collect any personal data at all.</p>
      </div>
    </div>
  )
}

export default memo(Blueberries);
