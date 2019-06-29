/*eslint-disable*/
import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/logos/piaic-logo-new.svg';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {

        return (
            <div className="navbar">
                <div className="col-sm-6 col-6" >
                    <Link to='/'>
                        <img width={70} height={70} src={logo} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar