import { FC } from 'react';
import { InfoCardProps } from '../types/card.ts';
import styles from '../styles/components/Card.module.scss';
import { Link } from 'react-router-dom';

export const Card: FC<InfoCardProps> = ({ title, description, image }) => {
    return (
        <div className={styles.card}>
            <Link to={title}>
                <h2 className={styles.card__title}>{title}</h2>
                <div className={styles.card__content}>
                    <p className={styles.card__text}>{description}</p>
                    <img
                        className={styles.card__image}
                        src={image.uri}
                        alt={image.alt}
                    />
                </div>
            </Link>
        </div>
    );
};
