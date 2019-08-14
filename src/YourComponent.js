import React, { Component } from 'react';
import Maps from './Maps'

/*
* Use this component as a launching-pad to build your functionality.
*
*/


class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Maps/>
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};


export default YourComponent;


// class YourComponent extends Component {


//   render() {
    

//   let divStyle = {
//   border: 'red',
//   borderWidth: 2,
//   borderStyle: 'solid',
//   padding: 20
// };
//     return (

//       <div classstyle={divStyle}>
//         <h1> Put your solution here!</h1>

//         <h2>
//           Hola
//         </h2>
//       </div>
//     );

//   }
// }

// export default YourComponent;



//API KEY GOOGLE MAPS: AIzaSyBZrbYMVmEVDK-CgM2vh0D18mN9sW_70kM


// Uninstall this, and make sure you have create a project in firebase console
// Run
// sudo npm install -g firebase-cli
// &&
// sudo npm install -g firebase-tools 
// Fixing deploy
// Run firebase init