import React, { Component } from 'react';



class Maps extends Component {
    constructor(props) {
        super(props);
        this.mapsRef = React.createRef();
    }

    componentDidMount() {

        let map = new window.google.maps.Map(document.getElementById('root'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        })

        var marker = new window.google.maps.Marker({
            position: { lat: 39.390897, lng: -99.066067 },
            map: map,
            title: 'First Map'
        });
    }

    render() {
        return (
            <div>
                <div id="root" ref={this.mapsRef}></div>
            </div>
        )
    }
}

export default Maps;