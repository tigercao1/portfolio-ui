import React, { Component } from 'react';
import './SkillPanel.scss';

class SkillPanel extends Component {
    render() {
        return (
            <div className="skill-panel">
                {this.props.children}
            </div>
        )
    }
}

export default SkillPanel