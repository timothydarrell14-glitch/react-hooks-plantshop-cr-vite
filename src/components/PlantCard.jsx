import React, {useState} from "react";

function PlantCard({id, name, price, image, key}) {

  const[availability, setAvailability] = useState(true)

  function handleClick(){
    setAvailability(false)
  }
  function handleEvent(){
    setAvailability(true)
  }

  return (
    <li key={key} className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {availability ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleEvent}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
