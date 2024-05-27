import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Divider } from 'antd';
import { ListAuthors } from './list.tsx';
import { CreateForm } from './create.tsx';
import { UpdateForm } from './update.tsx';
import { Header } from '../../components/Header.tsx';
import { Footer } from '../../components/Footer.tsx';
import styles from '../../styles/pages/Books.module.scss';

function Authors() {
    const [visible, setVisible] = useState<boolean>(false);
    const [authorId, setAuthorId] = useState<number>();
    const { t } = useTranslation();
    const { isPending, error, data } = useQuery({
        queryKey: ['authors'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/authors').then((res) =>
                res.json()
            ),
    });

    if (isPending) return t('loading');

    if (error) return `${t('error.message')} ` + error.message;

    const onUpdate = (id: number) => {
        setVisible(true);
        setAuthorId(id);
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h2 className={styles.main__title}>
                    {t('table.authors.header')}
                </h2>
                <ListAuthors data={data} onUpdate={onUpdate} />
                <Divider />
                <h3 className={styles.main__title}>
                    {t('table.authors.createTitle')}
                </h3>
                <CreateForm />
                <Divider />
                <UpdateForm
                    bookId={authorId}
                    visible={visible}
                    setVisible={setVisible}
                />
            </main>
            <Footer />
        </>
    );
}

export default Authors;
