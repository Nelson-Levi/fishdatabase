import React, { useState } from "react";
import { readFishData } from "../firebase/databaseFunctions";
// import { data } from "react-router-dom";
function ReadForm() {
        
        const [firebaseData, setFirebaseData] = useState(null);
        const [username, setUsername] = useState('');
        const [date, setDate] = useState('');
        const [noDataExists, setnoDataExists] = useState(false);
        
    function handleRead() {
        if (!username || !date) {
            alert("Please fill in missing data. ")
            return;
        } 
        readFishData(username, date)
        .then(snapshot => {
            if (snapshot.exists()) {
                setFirebaseData(snapshot.val());
                setnoDataExists(false);
            } else {
                setnoDataExists(true);
                return;
            }
        })
        .catch(error => {
            console.error("Error reading data:", error)
        });
    }
        return (
        <div>
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
            placeholder="Enter date"
        />
        <button onClick={handleRead}>Check the Database!</button>

        {firebaseData && (
        <div style={{ marginTop: '10px' }}>
          <p>Username: {firebaseData.username}</p>
          <p>Date: {firebaseData.date}</p>
          <p>Species: {firebaseData.species}</p>
          <p>Location: {firebaseData.location}</p>
          <p>Tackle: {firebaseData.tackle}</p>
          <p>Details: {firebaseData.details}</p>
        </div>
        )}

        { noDataExists && (
            <div style={{ marginTop: '10px' }}>
                <p>No data found.</p>
            </div>
        )}
        
        </div>
        );
      }
    

export default ReadForm;