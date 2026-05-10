import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";


function PlantList() {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log("Hello World")
    const fetchList = async () => {
      try{
        let res = await fetch(`http://localhost:6001/plants`);

        if(!res.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        let data = await res.json();

        setList(data)
        // console.log(data);
        // console.log("Hello World");


      }catch(error){
        console.error("Unable to get list",error)
      }
    };
    fetchList();

  }, []);

  // console.log(list)

  return (
    <ul className="cards">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        list.map((plant, index) => (
          <>
          <PlantCard id={plant.id} name={plant.name} image={plant.image} price={plant.price} key={index}/>
          </>
        ))
      )}
    </ul>
  );
}

export default PlantList;
