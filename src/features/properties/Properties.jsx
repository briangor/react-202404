import { useEffect, useState } from "react";
import axios from "axios";
import './Properties.css';
import Property from "./Property";
// import { properties as DATA } from "../../data/properties";

export default function Properties() {
  const [properties, setProperties] = useState(null);
//   const URL = "https://fakestoreapi.com/products?limit=5";
  const URL = "https://express-kyt.onrender.com/api/properties";
  const cachedProperties = new Map();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setProperties(response.data);
      } catch (err) {
        console.log("Error! : " + err);
      }
    }
    getData();
  }, []);
//   console.log(DATA);

  return (
    <div className="properties">
      <h1>PROPERTIES</h1>

      {properties ? (
        <ul>
          {properties.map((d) => (
            <li>{d.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <p> single</p>
      <Property />
    </div>
  );
}

//todo: TEST for kyt -> fetch data, use props then refactor to a reducer; use state then refactor to contextAPI /  useQuery / SWR
// baseURL: the api link
// todo: use react-query(tanstark) & SWR
// todo: test caching performance

/*

const cachedProperties = new Map();

const fetchPropertyDetails = (propertyId) => {
    if (cachedProperties.has(propertyId)) {
        setPropertyDetails(cachedProperties.get(propertyId));
    } else {
        fetch(`/api/properties/${propertyId}`)
            .then(response => response.json())
            .then(data => {
                cachedProperties.set(propertyId, data);
                setPropertyDetails(data);
            })
            .catch(error => console.error('Error fetching property details:', error));
    }
};

*/
