import React from 'react';
import { Timeline, TimelineItem } from '../Timeline';
import styles from './Page.module.scss';

export const Page = ({ children }) => {
    return (
        <div className={styles.Page}>
            <Timeline>
                <TimelineItem title titleText="About"></TimelineItem>
                <TimelineItem></TimelineItem>
                <TimelineItem></TimelineItem>

                <TimelineItem></TimelineItem>

                <TimelineItem title></TimelineItem>
            </Timeline>
        </div>
    );
};
