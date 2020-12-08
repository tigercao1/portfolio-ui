import React, { Component } from 'react';
import './Footbar.scss';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footbar extends Component {
    render() {
        return (
            <div className="footbar">
                <div className="copyright">
                    <FontAwesomeIcon icon={faCopyright}/>  Yizhang Cao
                </div>
            </div>
        )
    }
}

export default Footbar;