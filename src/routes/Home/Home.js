import { memo } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./Home.css";

function Home() {
  useTitle("TechnologyGoat");

  return (
    <div className="home">
      <div className="apps">
        <Link className="app" to="blueberries">
          <img src={require("../../assets/images/apps/Blueberries App Icon.png")} />
          <div>
            <h4>Blueberries</h4>
            <p>Focus Timer</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default memo(Home);
