import React from 'react';
import './Titlebar.scss';

const Titlebar = (props) => {
    return (
        <div className="titlebar">
            <div className="logo">
                <img src={props.logo} alt="logo"></img>
            </div>
            <div className="menu-items">{props.children}</div>
        </div>
    );
};

export default Titlebar;
