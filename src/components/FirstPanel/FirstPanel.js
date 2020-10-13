import React, { Component } from 'react';
import './FirstPanel.scss';

class FirstPanel extends Component {
    render() {
        return (
            <div className="first-panel">
                <div className="left">
                    <img src={this.props.img} alt="avatar"/>
                    <p>Hi, I'm Tiger!</p>
                    <span className="location">Ottawa | Toronto | Oakville</span>
                    <div className="social-links">
                        {this.props.children}
                    </div>
                </div>
                <div className="right">
                    <p>A Full-stack software engineer who loves to solve chanllenging problems, passionate about technologies and extrememly self-motivated.</p>
                </div>
            </div>
        )
    }
}

export default FirstPanel;