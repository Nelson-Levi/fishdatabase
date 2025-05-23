import React, { useState } from "react";
import { writeFishData } from "../firebase/databaseFunctions";

function EntryForm() {
    
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [species, setSpecies] = useState('');
    const [location, setLocation] = useState('');
    const [tackle, setTackle] = useState('');
    const [details, setDetails] = useState('');
    const [submitted, setSubmitted] = useState(false);

    async function handleWrite() {
        if (!username || !date || !species || !location || !tackle) {
            alert("Please fill in missing data. ")
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
        } catch (error) {
          console.error("Error writing to Firebase", error);
        }
  }

  console.log("Entry")

return (
    <div>
      {/* {submitted && (
        <div className="writeSuccess">
          <h1>Your submission was successful!</h1>
        </div>
      )} */}
      <input
        // type="text"
        // value={username}
        onChange={(e) => {console.log(e.target.value)}}
        // placeholder="Enter username"
      />
      {/* <input
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)}
        placeholder="Enter date"
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
      <button onClick={handleWrite}>Save to Firebase</button>
    */}
    </div>
  );
}

export default EntryForm;
