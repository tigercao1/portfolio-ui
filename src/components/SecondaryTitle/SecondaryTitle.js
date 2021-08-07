import React from 'react';
import './SecondaryTitle.scss';

const SecondaryTitle = (props) => {
    return (
        <div className="secondary-title">
            <span className="title">{props.children}</span>
            <span className="bottom-border"></span>
        </div>
    );
};

export default SecondaryTitle;
