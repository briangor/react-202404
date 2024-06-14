import { Link } from "react-router-dom";
import './Properties.css';
// import img_1 from "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBed,
//   faBath,
// } from "@fortawesome/free-solid-svg-icons";

export default function Property({ property }) {
    //console.log(props);
    // const default_property = {
    //   img_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    //   price: "Ksh 1,291,000",
    //   description: "1200 Muruma Drive, Lenana. 21BC",
    //   name: "XXXXXX, Nairobi",
    //   beds: 2,
    //   baths: 2
    // }
    const beds = 2;
  return (
    <div className="property-item">
        <h5>property</h5>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Property" className="" width="200" height="150"/>
    </div>
  )
}

{/* <div className="property-item">
        <Link to="/property-detail">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Property" className="" width="200" height="150"/>
      </Link>
      <div className="property-content">
        <div className="price">
          <span>Ksh 1,291,000</span>
        </div>
        <div>
          <span className="">
            1200 Muruma Drive, Lenana. 21BC
          </span>
          <span className="city">XXXXXX, Nairobi</span>
          <div className="">
            <span className="d-block d-flex align-items-center me-3">
              <span className="icon-bed me-2" />
               <FontAwesomeIcon icon={faBed}/>
              <span className="caption mx-1"> beds</span> 
            </span>
            <span className="d-block d-flex align-items-center">
              <span className="icon-bath me-2" />
              <FontAwesomeIcon icon={faBath} />
              <span className="caption mx-1">2 baths</span>
            </span>
          </div>
          <Link to="/property-detail" className="btn-default btn-default-primary py-2 px-3">
            See details
          </Link>
        </div>
      </div>
    </div> */}

/*
# card (rent)
image
price pm
tag (for rent)
beds, abths
location
Listed by ${agent_name}


# card (sale)
image
price
tag (for sale)
beds, bath
location
Listed by ${agent_name}



image: https://unsplash.com/photos/low-angle-photo-of-blue-building-TVyhDpvL8MY
price: 40000 (ksh pm)
tag: For Rent
beds: 2
baths: 2
location: Waiyaki Way
Listed By: Armaco Agents
*/