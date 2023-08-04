import React from "react";
import { Col } from "reactstrap";
import "./TouristPlace.css";

function TouristPlace(touristplacedata) {
  return (
    <Col sm="12" md="6" lg="4">
      <div className="touristcomp">
        <h3>{touristplacedata.Name}</h3>
        <img src={touristplacedata.ImagePath}></img>
        <p>
          <strong>{touristplacedata.Type}</strong>
        </p>
        <p>
          <a href={touristplacedata.MoreInfo} target="_blank">
            More Info
          </a>
        </p>
      </div>
    </Col>
  );
}

export default TouristPlace;
