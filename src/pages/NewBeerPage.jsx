import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeerPage() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');
    
 

 const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name: name, 
            tagline: tagline, 
            description: description, 
            first_brewed: firstBrewed, 
            brewers_tips: brewersTips, 
            attenuation_level: attenuationLevel, 
            contributed_by: contributedBy, 
          };

 axios.post("https://ih-beers-api2.herokuapp.com/beers", body).then (()=> {
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
    setName("");

    navigate("/");
 });
 };


 return (
    <div className="bg-signup">
     <div className="col-12 col-md-6 mx-auto py-4"></div>
      <h2>Add Beers</h2>
      <form className= "form-group" onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name</label>
        <input className="form-control"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input className="form-control"
          type="text"
          id="tagline"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <textarea className="form-control"
          type="text"
          id="description"
          name="description"
          value={description}
          cols="30"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        />
      
        <br />
        <label htmlFor="firstBrewed">First Brewed</label>
        <input className="form-control"
          type="text"
          id="firstBrewed"
          name="firstBrewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <br />
        <label htmlFor="brewersTips">Brewers Tips</label>
        <input className="form-control"
          type="text"
          id="brewersTips"
          name="brewersTips"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <br />
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input className="form-control"
          type="number"
          id="attenuationLevel"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <br />
        <label htmlFor="contributedBy">Contributed By</label>
        <input className="form-control"
          type="text"
          id="contributedBy"
          name="contributedBy"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        /> 
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerPage;
