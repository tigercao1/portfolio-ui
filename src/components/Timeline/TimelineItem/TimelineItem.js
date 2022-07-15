import React from 'react';
import styles from './TimelineItem.module.scss';

export const TimelineItem = ({
    title = false,
    titleText = undefined,
    primaryText = undefined,
    secondaryText = undefined,
    description = undefined,
}) => {
    const bulletinStyle =
        `${styles.Circle} ` + (title ? `${styles.TitleCircle}` : '');

    return (
        <div className={styles.TimelineItemContainer}>
            <span className={bulletinStyle}></span>
            {titleText && <h2>{titleText}</h2>}
            {primaryText && <h3>{primaryText}</h3>}
            {secondaryText && (
                <h5 className={styles.Subdubed}>{secondaryText}</h5>
            )}
            {description && <p>{description}</p>}
        </div>
    );
};
