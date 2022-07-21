import React from 'react';
import styles from './Timeline.module.scss';

export const Timeline = ({ children }) => {
    return <div className={styles.TimelineContainer}>{children}</div>;
};
