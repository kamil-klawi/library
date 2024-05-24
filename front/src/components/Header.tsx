import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Header.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const header = useRef(null);
    const tl = useRef<any>();
    const { t } = useTranslation();

    const handleMenuButton = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                        {t('navigation.brand')}
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
                    <button
                        role="button"
                        className={styles.nav__menu}
                        onClick={handleMenuButton}
                    >
                        {t('navigation.close')}
                    </button>
                    <ul className={styles.nav__list}>
                        <li className={`${styles.nav__item} menu__item`}>
                            <Link to="/" className={styles.nav__link}>
                                {t('navigation.home')}
                            </Link>
                        </li>
                        <li className={`${styles.nav__item} menu__item`}>
                            <Link to="/about" className={styles.nav__link}>
                                {t('navigation.about')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
