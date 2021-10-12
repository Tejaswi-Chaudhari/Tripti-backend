import React, { Component } from "react";

class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        const l1 = position.coords.latitude;
        const l2 = position.coords.longitude;
        console.log("L1 is :", l1);
        console.log("L2 is :", l2);
        localStorage.setItem('latitude', l1)
        localStorage.setItem('longitude', l2)
      });
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Location;