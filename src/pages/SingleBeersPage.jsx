import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const { Id } = useParams();


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${Id}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      });
      
  }, [Id]);

  return (
    <div key={beer._id} className="card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;

