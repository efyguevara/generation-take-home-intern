import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';

class Navs extends Component {
    render() {
        return (
            <Navbar className="Navbar navbar-dark bg-dark">
                <Navbar.Brand href="#home">Store Map Mexico City</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {/* <a href="#login" className="äctive" >Favorites</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navs;