import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { MenuList } from './MenuList.tsx';
import styles from '../styles/components/Footer.module.scss';

export const Footer = () => {
    const today = dayjs();
    const { t } = useTranslation();

    const links = [
        {
            name: 'authors',
            uri: 'authors',
        },
        {
            name: 'books',
            uri: 'books',
        },
        {
            name: 'translators',
            uri: 'translators',
        },
    ];

    const menu = [
        {
            name: t('navigation.home'),
            uri: '',
        },
        {
            name: t('navigation.about'),
            uri: 'about_project',
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.wrapper__content}>
                    <p className={styles.footer__text}>
                        {t('footer.description')}
                    </p>
                    <div className={styles.wrapper__list}>
                        <MenuList
                            arrayList={links}
                            classNameItem={styles.wrapper__item}
                            classNameLink={styles.footer__text}
                            classNameList={styles.footer__list}
                        />
                        <MenuList
                            arrayList={menu}
                            classNameItem={styles.wrapper__item}
                            classNameLink={styles.footer__text}
                            classNameList={styles.footer__list}
                        />
                    </div>
                </div>
                <div className={styles.wrapper__divider}></div>
                <div className={styles.wrapper__content}>
                    <p className={styles.footer__text}>
                        &copy;&nbsp;Nasza biblioteka&nbsp;{today.year()}
                    </p>
                    <p className={styles.footer__text}>
                        {today.format('dddd, DD MMM YYYY')}
                    </p>
                </div>
            </div>
        </footer>
    );
};
