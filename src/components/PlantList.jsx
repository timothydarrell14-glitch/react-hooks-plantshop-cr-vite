import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], loading = false }) {
  return (
    <ul className="cards">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        plants.map((plant, index) => (
          <PlantCard 
            id={plant.id} 
            name={plant.name} 
            image={plant.image} 
            price={plant.price} 
            key={plant.id || index} 
          />
        ))
      )}
    </ul>
  );
}

export default PlantList;
