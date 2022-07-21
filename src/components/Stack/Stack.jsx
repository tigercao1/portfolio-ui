import React from 'react';
import styles from './Stack.module.scss';

export const Stack = ({ vertical = false, children }) => {
    const stackStyle = vertical ? styles.Vertical : styles.Horizontal;
    return <div className={stackStyle}>{children}</div>;
};
