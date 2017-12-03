import React, { Component } from "react";
import { connect } from "react-redux";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  render() {
    const mapStyles = require("../MapStyles.json");
    return (
      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        defaultOptions={{ styles: mapStyles }}
       >
        {this.props.users.data.map(geo => {
          return (
            <Marker
              key={geo.id}
              position={{
                lat: parseFloat(geo.address.geo.lat),
                lng: parseFloat(geo.address.geo.lng)
              }}
            />
          );
        })}
      </GoogleMap>
    );
  }
}

function mapStateToProp(state) {
  return {
    users: state.graph
  };
}

export default connect(mapStateToProp)(withGoogleMap(Map));
