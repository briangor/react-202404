import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Properties() {
    const [properties, setProperties] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await getAll();
            console.log(response.data);
            setProperties(response.data);
        }
    }, []);
    console.log(properties);
  return <div>Properties</div>;
}

// export axios.create({
//     baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api/",
//     headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Origin": "*"
//     },
// });

// class PropertyDataService {
//     getAll() {
//         return http.get("/properties");
//     }

export function fetcher() {
  return axios.create({
    baseURL:
      process.env.REACT_APP_API_URL ||
      "http://localhost:8080/api/",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function getAll() {
  return fetcher.get("/properties");  
}


//todo: TEST for kyt -> fetch data, use props then refactor to a reducer; use state then refactor to contextAPI /  useQuery / SWR
// baseURL: the api link