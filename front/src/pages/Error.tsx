import { useTranslation } from 'react-i18next';

import ErrorImage from '../assets/404.svg';
import styles from '../styles/pages/Error.module.scss';

function Error() {
    const { t } = useTranslation();
    return (
        <div className={styles.error}>
            <div className={styles.content}>
                <img
                    className={styles.content__image}
                    src={ErrorImage}
                    alt="Error 404"
                />
                <h2 className={styles.content__title}>{t('error.title')}</h2>
                <p className={styles.content__descr}>
                    {t('error.description')}
                </p>
            </div>
        </div>
    );
}

export default Error;
