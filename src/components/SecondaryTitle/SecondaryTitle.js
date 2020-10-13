import React, { Component } from 'react';
import './SecondaryTitle.scss';

class SecondaryTitle extends Component {
    render() {
        return (
            <div className="secondary-title">
                <span className="title">{this.props.children}</span>
            </div>
        )
    }
}

export default SecondaryTitle