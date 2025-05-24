import React from "react";
import { useLocation } from "react-router-dom";

function Submitted() {

    const { state } = useLocation();

    if (!state) {
        return <p>No data submitted. How did you get here?</p>
    }

    const { username, date, species, location, tackle, details } = state;

    return (
     <div>
      <h1>Submission Successful!</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Species:</strong> {species}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Tackle:</strong> {tackle}</p>
      <p><strong>Details:</strong> {details}</p>
      <img src="/submit-fish.jpg" alt="Trout" className="submit-fish"/>
    </div>
    );
}

export default Submitted;