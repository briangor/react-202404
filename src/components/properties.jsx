// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { properties as DATA } from "../data/properties";

export default function Properties() {
    // const [properties, setProperties] = useState(null);
    // const URL = "";

    // useEffect(() => {
    //     async function getData() {
    //         const response = await axios.get(URL);
    //         //console.log(response.data);
    //         setProperties(response.data);
    //     }
    //     getData();
    // }, []);
    //console.log(properties);

  // const house = properties.map(d => 
  //   <li>{d.description}</li>
  // )
  
  return <div>
    <h1>PROPERTIES</h1>
    
    {/* {properties ? 
    <ul>{properties.map(d => <li>{d.description}</li>)}</ul>
    : <p>Loading...</p>
    } */}
  </div>;
}


//todo: TEST for kyt -> fetch data, use props then refactor to a reducer; use state then refactor to contextAPI /  useQuery / SWR
// baseURL: the api link