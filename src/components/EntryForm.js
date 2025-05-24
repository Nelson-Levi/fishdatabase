import React, { useState } from "react";
import { writeFishData } from "../firebase/databaseFunctions";
import { useNavigate } from "react-router-dom";

function EntryForm() {

  const navigate = useNavigate();

  const routeChange = (path) =>{ 
  navigate(path);
  }

  function validateInputs({ username, date, species, location, tackle }) {
    const errors = {}

    if (!username.trim()) errors.username = "Please enter a username.";
    if (!date.trim()) errors.date = "Please enter a date.";
    if (!species.trim()) errors.species = "Please enter the fish species.";
    if (!location.trim()) errors.location = "Please enter the catch location";
    if (!tackle.trim()) errors.tackle = "Please enter the tackle used!";

    return errors;
  }
  
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [tackle, setTackle] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

 async function handleWrite(e) {
  e.preventDefault();

  const errors = validateInputs({ username, date, species, tackle, location} )
  if (Object.keys(errors).length > 0) {
    alert(Object.values(errors).join('/n'));
    return;
  }

  try {
    await writeFishData(username, date, species, location, tackle, details);
    setSubmitted(true);
    setUsername('');
    setDate('');
    setSpecies('');
    setLocation('');
    setTackle('');
    setDetails('');

    navigate("/submitted", {
      state: {
        username,
        date,
        species,
        location,
        tackle,
        details
      }
    });
  } catch (error) {
    console.error("Error writing to Firebase", error);
  }
}


return (
    <div>
      {submitted && (
        <div className="writeSuccess">
          <h1>Your submission was successful!</h1>
        </div>
      )}
      <form onSubmit={handleWrite}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <input
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Enter date (mm-dd-yy)"
        pattern="^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{2}$" 
      />
      <input
        type="text"
        value={species}
        onChange={e => setSpecies(e.target.value)}
        placeholder="Enter fish species"
      />
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <input
        type="text"
        value={tackle}
        onChange={e => setTackle(e.target.value)}
        placeholder="Enter bait and tackle"
      />
      <input
        type="text"
        value={details}
        onChange={e => setDetails(e.target.value)}
        placeholder="Enter additional details"
      />
      <button type="submit">Save to Firebase</button>
      </form>
    </div>
  );
}

export default EntryForm;
