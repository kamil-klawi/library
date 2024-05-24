import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Footer.module.scss';

export const Footer = () => {
    const today = dayjs();
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.wrapper__content}>
                    <p className={styles.footer__text}>{t('footer.description')}</p>
                    <div className={styles.footer__list}>
                        <li className={styles.wrapper__item}>
                            <a
                                className={styles.footer__text}
                                href="https://www.instagram.com/"
                                target={'_blank'}
                            >
                                Instagram
                            </a>
                        </li>
                        <li className={styles.wrapper__item}>
                            <a
                                className={styles.footer__text}
                                href="https://www.facebook.com/"
                                target={'_blank'}
                            >
                                Facebook
                            </a>
                        </li>
                        <li className={styles.wrapper__item}>
                            <a
                                className={styles.footer__text}
                                href="https://x.com/"
                                target={'_blank'}
                            >
                                X/Twitter
                            </a>
                        </li>
                    </div>
                </div>
                <div className={styles.wrapper__divider}></div>
                <div className={styles.wrapper__content}>
                    <p className={styles.footer__text}>
                        &copy;&nbsp;{t('footer.copyright')}&nbsp;{today.year()}
                    </p>
                    <p className={styles.footer__text}>
                        {today.format('dddd, DD MMM YYYY')}
                    </p>
                </div>
            </div>
        </footer>
    );
};
