import React, { Component } from "react";
import GMap from "./Map";

class MapCustom extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-block">
            <GMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MapCustom;
