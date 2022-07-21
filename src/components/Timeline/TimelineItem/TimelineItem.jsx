import React from 'react';
import styles from './TimelineItem.module.scss';

export const TimelineItem = ({
    title = false,
    titleText = undefined,
    primaryText = undefined,
    secondaryText = undefined,
    description = undefined,
    timestamp = undefined,
}) => {
    const bulletinStyle =
        `${styles.Circle} ` + (title ? `${styles.TitleCircle}` : '');

    return (
        <div className={styles.TimelineItemContainer}>
            <span className={bulletinStyle}></span>
            {titleText && <div className={styles.TitleText}>{titleText}</div>}
            {primaryText && (
                <div className={styles.PrimaryText}>{primaryText}</div>
            )}
            {secondaryText && (
                <div className={`${styles.Subdubed} ${styles.SecondaryText}`}>
                    {secondaryText}
                </div>
            )}
            {description && (
                <div className={styles.BodyText}>{description}</div>
            )}
            {timestamp && (
                <span className={`${styles.Subdubed} ${styles.TimeStamp}`}>
                    {timestamp}
                </span>
            )}
        </div>
    );
};
