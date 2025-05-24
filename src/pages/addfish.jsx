import EntryForm from "../components/EntryForm";

function AddFish() {
    return (
        <div>
            <h1>Enter Fish Data!</h1>
            <EntryForm />
            <img src="/add-picture.jpg" alt="Fish released"></img>
        </div>
    );
}

export default AddFish;