import React from 'react';
import { Timeline, TimelineItem } from '../Timeline';
import styles from './Page.module.scss';
import {
    faLinkedinIn,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { IconLink } from '../IconLink/IconLink';
import { Stack } from '../Stack';
import resume from '../../assets/files/resume.pdf';

const data = [
    {
        title: true,
        titleText: 'Tiger Cao',
    },
    {
        primaryText: 'Frontend Dev at Shopify',
        secondaryText: (
            <Stack>
                <IconLink
                    link="https://www.linkedin.com/in/yizhang-tiger-cao"
                    icon={faLinkedinIn}
                    description="LinkedIn"
                ></IconLink>
                <IconLink
                    link="https://github.com/tigercao1"
                    icon={faGithub}
                    description="GitHub"
                ></IconLink>
                <IconLink
                    link="https://www.instagram.com/yizhang.cao/"
                    icon={faInstagram}
                    description="Instagram"
                ></IconLink>
                <IconLink
                    link={resume}
                    icon={faFileAlt}
                    description="Resume"
                ></IconLink>
            </Stack>
        ),
        timestamp: '1998 - present',
    },
    {
        title: true,
        titleText: 'Experience',
    },
    {
        primaryText: 'Shopify',
        secondaryText: 'Frontend Develoepr',
        description: 'React TypeScript, GraphQL',
        timestamp: '2021.5 - present',
    },
    {
        primaryText: 'Solace',
        secondaryText: 'Junior Software Developer',
        description: 'Spring Boot, Java, ReactJS',
        timestamp: '2020.5 - 2020.8',
    },
    {
        primaryText: 'Trend Micro',
        secondaryText: 'Java Software Develoepr Intern',
        description: 'Groovy, Shell scripts, Jenkins, JSP',
        timestamp: '2019.1 - 2019.4',
    },
    {
        primaryText: 'Solace',
        secondaryText: 'Junior Software Developer',
        description: 'Spring Boot, Java, AureliaJS, MySQL',
        timestamp: '2018.5 - 2018.12',
    },
    {
        title: true,
        titleText: 'Education',
    },
    {
        primaryText: 'Carleton University',
        secondaryText: "Bachelor's of Computer Science Honours",
        description: (
            <ul>
                <li>
                    Graduated with Senate Medals for Outstanding Academic
                    Achievement
                </li>
                <li>2017-2021 Dean's Honour List</li>
                <li>Frederick William Baldwin Scholarship</li>
                <li>Lester Bowles Pearson Scholarship</li>
                <li>Carleton University Entrance Scholarship</li>
            </ul>
        ),
        timestamp: '2016.9 - 2021.4',
    },
    {
        title: true,
        titleText: 'Projects',
    },
    {
        primaryText: (
            <IconLink text="Slacker" link="https://slacker.tigerc.space" />
        ),
        secondaryText: 'ReactJS Frontend Project',
        description:
            'A React web app to keep track of productivity and slacking',
        timestamp: '2021.2',
    },
    {
        primaryText: (
            <IconLink
                text="The Shoppies"
                link="https://theshoppies.tigerc.space"
            />
        ),
        secondaryText: 'React JS Frontend Project',
        description:
            'The shoppies movie database for your favorite movie nominations',
        timestamp: '2021.1',
    },
];

export const Page = () => {
    return (
        <div className={styles.Page}>
            <Timeline>
                {data.map(
                    ({
                        title,
                        titleText,
                        primaryText,
                        secondaryText,
                        description,
                        timestamp,
                    }) => (
                        <TimelineItem
                            title={title}
                            titleText={titleText}
                            primaryText={primaryText}
                            secondaryText={secondaryText}
                            description={description}
                            timestamp={timestamp}
                        ></TimelineItem>
                    )
                )}
            </Timeline>
        </div>
    );
};
