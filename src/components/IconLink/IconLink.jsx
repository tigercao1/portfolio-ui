import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconLink.module.scss';

export const IconLink = ({
    link,
    icon = undefined,
    text = undefined,
    description,
}) => {
    return (
        <div className={!text && icon && styles.IconLinkContainer}>
            <a href={link} target="_blank" title={description}>
                {text && icon && (
                    <div className={styles.TextContainer}>
                        <span>{text} </span>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
                {text && (
                    <div className={styles.TextContainer}>
                        <span>{text} </span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                )}
                {icon && <FontAwesomeIcon icon={icon} />}
            </a>
        </div>
    );
};
