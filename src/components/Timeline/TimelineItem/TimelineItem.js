import React from 'react';
import styles from './TimelineItem.module.scss';

export const TimelineItem = () => {
    return (
        <div className={styles.TimelineItemContainer}>
            <span className={styles.Circle}></span>
            <div>Something</div>
        </div>
    );
};
