import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';
import { Card } from '../components/Card.tsx';
import BooksImage from '../assets/books.svg';
import AuthorsImage from '../assets/alien.svg';
import TranslatorsImage from '../assets/translate.svg';
import styles from '../styles/pages/Homepage.module.scss';

function App() {
    const { t } = useTranslation();
    const { isPending, error, data } = useQuery({
        queryKey: ['authors'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/authors').then((res) =>
                res.json()
            ),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h2 className={styles.main__title}>{t('table.homeTitle')}</h2>
                <Table
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                    bordered
                    scroll={{ x: '100%' }}
                >
                    <Table.Column title="Id" dataIndex="id" key="id" />
                    <Table.Column
                        title={t('table.firstName')}
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Table.Column
                        title={t('table.lastName')}
                        dataIndex="lastName"
                        key="lastName"
                    />
                </Table>
                <div className={styles.main__cards}>
                    <Card
                        uri={t('cards.books.uri')}
                        title={t('cards.books.title')}
                        description={t('cards.books.description')}
                        image={{ uri: BooksImage, alt: 'booksPhoto' }}
                    />
                    <Card
                        uri={t('cards.authors.uri')}
                        title={t('cards.authors.title')}
                        description={t('cards.authors.description')}
                        image={{ uri: AuthorsImage, alt: 'authorsPhoto' }}
                    />
                    <Card
                        uri={t('cards.translators.uri')}
                        title={t('cards.translators.title')}
                        description={t('cards.translators.description')}
                        image={{
                            uri: TranslatorsImage,
                            alt: 'translatorsPhoto',
                        }}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
