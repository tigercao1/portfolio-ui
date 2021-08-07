import React, { useEffect, useState } from 'react';
import './FirstPanel.scss';

const FirstPanel = (props) => {
    const [typed, setTyped] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    const text = 'Work in progress...';
    const speed = 150;

    useEffect(() => {
        const timer = setTimeout(() => {
            setTyped(typed + text.charAt(textIndex));
            setTextIndex((prevTextIndex) => prevTextIndex + 1);
        }, speed);
        return () => {
            clearInterval(timer);
        };
    }, [textIndex]);

    return (
        <div className="first-panel">
            <div className="left">
                <img src={props.img} alt="avatar" />
                <p>Hi, I'm Tiger!</p>
                <span className="location">Ottawa | Toronto | Oakville</span>
                <div className="social-links">{props.children}</div>
            </div>
            <div className="right">
                <p>
                    A Full-stack software engineer who loves to solve
                    chanllenging problems, passionate about technologies and
                    extremely self-motivated.
                </p>
                <p>
                    {typed}
                    <span></span>
                </p>
            </div>
        </div>
    );
};

export default FirstPanel;
