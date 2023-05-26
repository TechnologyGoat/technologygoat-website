import { memo } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./Unknown.css";

function Unknown() {
  useTitle("TechnologyGoat - Page not found");

  return (
    <div className="unknown">
      <div className="unknown-block">
        <h2>The page you’re looking for<br />can’t be found.</h2>
        <Link to="/">Return home</Link>
      </div>
    </div>
  )
}

export default memo(Unknown);
