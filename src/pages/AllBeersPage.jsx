import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
 const [beers, setBeers] = useState ([]);
 useEffect (() => {
  axios
  .get ("https://ih-beers-api2.herokuapp.com/beers") 
  .then ((response) => { 
    console.log("Beers:", response.data);
    setBeers (response.data);
  });
},[]);
  
  return (
    <div>
      <h2>List of beers</h2>
      {beers.map((item) => {
        return (
          <div key={item._id} className="beer-list-card">
            <img  src={item.image_url} alt={item.title} />

             <div>
            <h3>Name {item.name}</h3>
            <p>tagline {item.tagline}</p>
            <p>by{item.contributed_by}</p>
            <button>
              <Link to={`/beers/${item._id}`}>More info</Link>
            </button>
            </div>
             
          </div>
        );
      })}
    </div>
  )
}

export default AllBeersPage



//https://ih-beers-api2.herokuapp.com/beers