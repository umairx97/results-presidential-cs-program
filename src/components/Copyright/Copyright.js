import React, { Component } from 'react';

import './Copyright.css';
import panacloudlogo from "../../assets/panacloudfootericon.png";




class Copyright extends Component {
    state = {}
    render() {
        return (
            <div className="copyright-cont d-flex">
                <div className="copy-text" >
                    <b>© 2019 PIAIC. All rights reserved.</b>

                </div>
                <div className="footer-logo">
                    <div className="footer-panacloudlogo-cont">
                        <a
                            href="https://www.panacloud.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>Powered by</b>
                            <img alt="panacloudlogo" src={panacloudlogo} />
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Copyright;