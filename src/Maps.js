import React, { Component } from 'react';
import stores from './store_directory.json';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.mapsRef = React.createRef();
    }
    


    componentDidMount() {
        
        console.log(stores)   
        let map = new window.google.maps.Map(this.mapsRef.current, {
            center: { lat: 19.4978, lng: -99.1269 },
            zoom: 10
        })
        var myLatLng = {lat: 19.46961, lng: -99.17176};
        let marker = new window.google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Mexico city stores'
        });
        marker.setMap(map);
    }

    render() {
        return (
                <div id="divMap" ref={this.mapsRef}>
                    <h2>divMap</h2>
                </div>
        )
    }
}

export default Maps;

// render() {
//     return (

//         <div id="divMap" ref={this.mapsRef}>
//             <Container>
//                 <Row>
//                     <Col xs={12} md={12} lg={6} xl={6}>
//                     </Col>
//                     <Col xs={12} md={12} lg={6} xl={6}>
//                         <div>
//                             aki iran los marcadores
//                         </div>
//                         <div>
//                             aki iran los marcadores
//                         </div>
//                         <div>
//                             aki iran los marcadores
//                         </div>
//                         <div>
//                             aki iran los marcadores
//                         </div>
//                         <div>
//                             aki iran los marcadores
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }
// }


// { 
//     Name, 
//     Address, 
//     Coordinates: {
//         lat, 
//         lng, 
//     }