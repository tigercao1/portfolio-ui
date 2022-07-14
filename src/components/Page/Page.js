import React from 'react';
import { Timeline, TimelineItem } from '../Timeline';
import styles from './Page.module.scss';

export const Page = ({ children }) => {
    return (
        <div className={styles.Page}>
            <Timeline>
                <TimelineItem></TimelineItem>
            </Timeline>
        </div>
    );
};
