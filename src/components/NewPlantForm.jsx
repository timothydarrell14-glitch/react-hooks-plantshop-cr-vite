import React, { useState, useEffect, useRef } from "react";
import PlantList from "./PlantList";

function NewPlantForm({length}) {

  const nameRef = useRef("")
  const imageRef = useRef("")
  const priceRef = useRef("")

  function handleSubmit(event) {
    event.preventDefault();
    let newPlant = {
      id: length + 1,
      name: nameRef.current.value,
      image: imageRef.current.value,
      price: priceRef.current.value,
    }

    
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" ref={nameRef} />
        <input type="text" name="image" placeholder="Image URL" ref={imageRef} />
        <input type="number" name="price" step="0.01" placeholder="Price" ref={priceRef} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
