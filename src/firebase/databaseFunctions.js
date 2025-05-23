import { database } from './firebase';
import { ref, set, get } from 'firebase/database'

function writeFishData(username, date, species, location, tackle, details) {
    // Set the data, at the following reference location: our database, at location 'username/date'
    return set(ref(database, `${username}/${date}`), {
        username : username,
        date : date,
        species : species,
        location : location,
        tackle : tackle,
        details : details
    })
}

function readFishData(username, date) {
    // Save a REFERENCE to the data found at our database, at location username/date, to a const variable userReference
    const userReference = ref(database, `${username}/${date}`)
    // By calling get(), we return the data stored at userReference. 
    return get(userReference)
}

export { writeFishData, readFishData }