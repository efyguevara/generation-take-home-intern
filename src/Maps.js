import React, { Component } from 'react';
import stores from './store_directory.json';
const google = window.google;

class Maps extends Component {
    constructor(props) {
        super(props);
        this.mapsRef = React.createRef();
    }

    componentDidMount() {
        const mexicoCity = { lat: 19.4978, lng: -99.1269 };


        let mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(mexicoCity)
        }

        let map = new google.maps.Map(this.mapsRef.current, mapOptions);

        let transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

        for (let i = 0; i < stores.length; i++) {
            let marker = new google.maps.Marker({
                position: stores[i].Coordinates,
                map: map
            });
            marker.setMap(map);
        };
    }

    render() {
        return (
            <div id="divMap" ref={this.mapsRef}></div>
        )
    }
}


export default Maps;