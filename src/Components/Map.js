import React, { Component } from "react";
import { connect } from "react-redux";
import uniqueId from "lodash/uniqueId";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const { LatLng, LatLngBounds }  = window.google.maps;
const defaultLocation = new LatLng(38.7412482, 26.1844276) ;

class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
      geo : [],
      defaultZoom : 5
    }
  }

  componentWillReceiveProps(props){
    const geo = props.users.data.map(user => {
      return new LatLng(user.address.geo.lat,user.address.geo.lng)
    })

    this.setState({
      geo : geo,
    })
  }

  fitBounds() {
    const bounds = new LatLngBounds();    
    if(this.state.geo.length){
      this.state.geo.forEach(bound => bounds.extend(bound));
      this.refs.map.fitBounds(bounds);
    }
  }
  componentWillUpdate(){
    this.fitBounds();
  }

  render() {
    const mapStyles = require("../MapStyles.json");

    return (
      <GoogleMap
        ref="map"
        defaultZoom={this.state.defaultZoom}
        defaultCenter={defaultLocation}
        defaultOptions={{ styles: mapStyles }}
      >
        {this.state.geo.map(pos => {
          return <Marker key={uniqueId("map-")} position={pos} />;
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
