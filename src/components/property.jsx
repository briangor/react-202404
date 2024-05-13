import { Link } from "react-router-dom";
// import img_1 from "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBed,
//   faBath,
// } from "@fortawesome/free-solid-svg-icons";

export default function Property({ property }) {
    //console.log(props);
  return (
    <div className="property-item col-sm-12 col-md-3 mb-3">
        <Link to="/property-detail" className="img">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Property" className="img-fluid" width="200" height="150"/>
      </Link>
      <div className="property-content">
        <div className="price mb-2">
          <span>Ksh 1,291,000</span>
        </div>
        <div>
          <span className="d-block mb-2 text-black-50">
            1200 Muruma Drive, Lenana. 21BC
          </span>
          <span className="city d-block mb-3">XXXXXX, Nairobi</span>
          <div className="specs d-flex mb-4">
            <span className="d-block d-flex align-items-center me-3">
              {/* <span className="icon-bed me-2" /> */}
               {/* <FontAwesomeIcon icon={faBed}/> */}
              <span className="caption mx-1">2 beds</span>
            </span>
            <span className="d-block d-flex align-items-center">
              {/* <span className="icon-bath me-2" /> */}
              {/* <FontAwesomeIcon icon={faBath} /> */}
              <span className="caption mx-1">2 baths</span>
            </span>
          </div>
          <Link to="/property-detail" className="btn-default btn-default-primary py-2 px-3">
            See details
          </Link>
        </div>
      </div>
    </div>
  )
}
