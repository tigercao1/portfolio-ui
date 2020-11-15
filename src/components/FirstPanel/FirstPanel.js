import React, { Component } from 'react';
import './FirstPanel.scss';

class FirstPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {typed: ""};
    }

    typeWriter() {
        var i = 0
        let text = "Work in progress..."
        let speed = 150
        let self = this
        setInterval(type, speed)
        function type() {
            if (i < text.length) {
                self.setState((state, props) => {
                    console.log("test",i)
                    return {typed: state.typed + text.charAt(i)}
                });
                i++;
            }
        }

    }

    componentDidMount() {
        this.typeWriter()
    }

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
                    <p>{this.state.typed}<span></span></p>
                </div>
            </div>
        )
    }
}

export default FirstPanel;