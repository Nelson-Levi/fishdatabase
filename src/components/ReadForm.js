import React, { useState } from "react";
import { readFishData } from "../firebase/databaseFunctions";
function ReadForm() {
        
        const [firebaseData, setFirebaseData] = useState(null);
        const [username, setUsername] = useState('');
        const [date, setDate] = useState('');
        
    function handleRead() {
        if (!username || !date) {
            alert("Please fill in missing data. ")
            return;
        } 
        readFishData(username, date)
        .then(snapshot => {
            if (snapshot.exists()) {
                setFirebaseData(snapshot.val());
            } else {
                console.log("No data found.");
                return;
            }
        })
        .catch(error => {
            console.error("Error reading data:", error)
        });
    }
        return (
        <div>
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
        </div>
        );
      }
    

export default ReadForm;