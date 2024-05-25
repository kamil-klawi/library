import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { changeLanguage } from 'i18next';
import { Select } from 'antd';
import { MenuList } from './MenuList.tsx';
import styles from '../styles/components/Header.module.scss';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const header = useRef(null);
    const tl = useRef<any>();
    const { t } = useTranslation();
    const today = dayjs();

    const handleMenuButton = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguage = (language: string) => {
        changeLanguage(language);
        localStorage.setItem('lang', language);
    };

    const links = [
        {
            name: t('navigation.home'),
            uri: '',
        },
        {
            name: t('navigation.about'),
            uri: 'about_project',
        },
    ];

    gsap.registerPlugin(useGSAP());
    useGSAP(
        () => {
            tl.current = gsap.set('.menu__item', {
                x: 100,
                opacity: 0,
                skewX: '25deg',
                webkitFilter: 'blur(4px)',
            });
            tl.current = gsap
                .timeline({ paused: true })
                .to('.menu__overlay', {
                    clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
                    duration: 1.25,
                    ease: 'power4.inOut',
                })
                .to('.menu__item', {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    delay: -0.5,
                    skewX: 0,
                    webkitFilter: 'blur(0px)',
                    ease: 'power4.inOut',
                });
        },
        { scope: header }
    );

    useEffect(() => {
        if (isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header} ref={header}>
            <nav className={styles.nav}>
                <div className={styles.nav__inner}>
                    <Link to="/" className={styles.nav__brand}>
                        Nasza biblioteka
                    </Link>
                    <button
                        role="button"
                        className={styles.nav__menu}
                        onClick={handleMenuButton}
                    >
                        {t('navigation.menu')}
                    </button>
                </div>
            </nav>
            <div className={`${styles.overlay} menu__overlay`}>
                <div className={styles.hero__overlay}>
                    <div className={styles.nav__info}>
                        <p className={styles.nav__menu}>
                            {today.format('dddd, DD MMM YYYY')}
                        </p>
                        <button
                            role="button"
                            className={styles.nav__menu}
                            onClick={handleMenuButton}
                        >
                            {t('navigation.close')}
                        </button>
                    </div>
                    <MenuList
                        arrayList={links}
                        classNameItem={`${styles.nav__item} menu__item`}
                        classNameLink={styles.nav__link}
                        classNameList={styles.nav__list}
                    />
                    <Select
                        defaultValue="en"
                        className={styles.nav__languageSelector}
                        onChange={handleLanguage}
                        options={[
                            { value: 'en', label: 'English' },
                            { value: 'pl', label: 'Polish' },
                        ]}
                    />
                </div>
            </div>
        </header>
    );
};
