import React from "react";
import { useNavigate } from "react-router-dom";
const REACT_VERSION = React.version;

function Home() {

    const navigate = useNavigate();

    const routeChange = (path) =>{ 
    navigate(path);
  }

    return (
    <>
      <h1>Welcome to Levi's Fish Log!</h1>
      <img src="/home-fishing.jpg" alt="Man Fishing"/>
      <button className="homeNav" onClick={() => routeChange("/addfish")}>Add a Fish to the Database!</button>
      <button className="homeNav" onClick={() => routeChange("/readdata")}>View Saved Fish!</button>
      <div>React Version: {REACT_VERSION}</div>
    </>
    );
}

export default Home;