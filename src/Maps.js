import React, { Component } from 'react';
import stores from './store_directory.json';
const google = window.google;


class Maps extends Component {
    constructor(props) {
        super(props);
        this.mapsRef = React.createRef();
    }

    componentDidMount() {
        const infoCity = {
            cityCoordinates: {
                north: 25.49,
                south: 13.08,
                west: -105.39,
                east: -92.86,
            },
            cityLatLng: {
                latLng: new google.maps.LatLng( 19.414678, -99.134715 ), 
            }, 
            population: 
                105837
            };

        let mapOptions = {
            zoom: 11,
            center: infoCity.cityLatLng.latLng,
            restriction: {
                latLngBounds: infoCity.cityCoordinates,
                strictBounds: false,
            }   
        };


        let map = new google.maps.Map(this.mapsRef.current, mapOptions);
        google.maps.event.addListener(map, 'bounds_changed', function () {
            console.log(map.getBounds());
        });

        let cityCircle = new google.maps.Circle({

            strokeColor: '#5eac6f',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#5eac6f',
            fillOpacity: 0.25,
            map: map,
            center: infoCity.cityLatLng.latLng,
            radius: Math.sqrt(infoCity.population) * 100
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

            <div id="divMap" ref={this.mapsRef} >

            </div>
        )
    }
}


export default Maps;