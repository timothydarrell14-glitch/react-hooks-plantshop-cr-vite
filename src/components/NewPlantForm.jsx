import React, { useRef } from "react";

function NewPlantForm({ onAddPlant = () => {} }) {

  const nameRef = useRef("")
  const imageRef = useRef("")
  const priceRef = useRef("")

  async function handleSubmit(event) {
    event.preventDefault();
    let newPlant = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      price: priceRef.current.value,
    }
    
    try {
        const response = await fetch(`http://localhost:6001/plants`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        onAddPlant(data);
        
        nameRef.current.value = "";
        imageRef.current.value = "";
        priceRef.current.value = "";
        return data;

    } catch (error) {
        console.error("Error adding plant:", error);
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
