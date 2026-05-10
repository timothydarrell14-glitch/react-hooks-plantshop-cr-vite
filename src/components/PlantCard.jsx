import React, {useState} from "react";

function PlantCard({id, name, price, image, key}) {

  const[availability, setAvailability] = useState(false)

  return (
    <li key={key} className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
