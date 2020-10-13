import React, { Component } from 'react';
import './Titlebar.scss'

class Titlebar extends Component {
    render() {
        return (
            <div className="titlebar">
                <div className="logo">
                    <img src={this.props.logo} alt="logo"></img>
                </div>
                <div className="menu-items">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Titlebar;