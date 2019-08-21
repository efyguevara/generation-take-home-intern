import React, { Component } from 'react';
import stores from './store_directory.json';
const google = window.google;

class Maps extends Component {
    constructor(props) {
        super(props);
        this.mapsRef = React.createRef();
    }

    componentDidMount() {
        const mexicoCity = {
            north: 25.49,
            south: 13.08,
            west: -105.39,
            east: -92.86,
        };

        let city = { lat: 19.414678, lng: -99.134715 };
        let mapOptions = {
            zoom: 12,
            center: city,
            restriction: {
                latLngBounds: mexicoCity,
                strictBounds: false,
            }
        };

        let map = new google.maps.Map(this.mapsRef.current, mapOptions);
        google.maps.event.addListener(map, 'bounds_changed', function () {
        });

        let transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

        for (let i = 0; i < stores.length; i++) {
            let infoWindowMarker = `
            <p> <b> Name:</b> ${stores[i].Name} </p> 
            <p> <b> Address: </b> ${stores[i].Address} </p>`;

            let infowindow = new google.maps.InfoWindow({
                content: infoWindowMarker,
            });

            let marker = new google.maps.Marker({
                position: stores[i].Coordinates,
                map: map
            });

            marker.setMap(map);

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        };
    }

    render() {
        return (
            <div id="divMap" ref={this.mapsRef}></div>
        )
    }
}


export default Maps;