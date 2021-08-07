import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footbar.scss';

const Footbar = () => {
    return (
        <div className="footbar">
            <div className="copyright">
                <FontAwesomeIcon icon={faCopyright} /> Yizhang Cao
            </div>
        </div>
    );
};

export default Footbar;
