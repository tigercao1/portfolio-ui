import React from 'react';
import './SkillPanel.scss';

const SkillPanel = (props) => {
    return <div className="skill-panel">{props.children}</div>;
};

export default SkillPanel;
