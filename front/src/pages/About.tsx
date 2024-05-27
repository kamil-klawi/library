import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import { FC } from 'react';
import { backendTech, frontendTech } from '../utils/techList.ts';
import { Footer } from '../components/Footer.tsx';
import { Header } from '../components/Header.tsx';
import styles from '../styles/pages/Homepage.module.scss';

function About() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h2 className={styles.main__title}>{t('about.title')}</h2>
                <p className={styles.main__description}>
                    {t('about.description')}
                </p>
                <Divider />
                <a
                    className={styles.main__githubLink}
                    href="https://github.com/kamil-klawi/library"
                    target="_blank"
                >
                    {t('about.repository')}
                </a>
                <Divider />
                <h3 className={styles.main__title}>
                    {t('about.technologies')}
                </h3>
                <MenuTech title={'Backend'} techList={backendTech} />
                <Divider />
                <MenuTech title={'Frontend'} techList={frontendTech} />
                <Divider />
            </main>
            <Footer />
        </>
    );
}

export default About;

interface MenuTech {
    title: string;
    techList: Array<string>;
}

const MenuTech: FC<MenuTech> = ({ title, techList }) => {
    return (
        <>
            <h4 className={styles.main__description}>{title}</h4>
            <ul className={styles.main__techList}>
                {techList.map((technology, index) => (
                    <li
                        className={styles.main__techItem}
                        key={`tech__${index}`}
                    >
                        <p className={styles.main__description}>{technology}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};
