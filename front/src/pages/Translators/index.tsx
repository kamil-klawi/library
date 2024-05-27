import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Divider } from 'antd';
import { Header } from '../../components/Header.tsx';
import { Footer } from '../../components/Footer.tsx';
import { ListBooks } from './list.tsx';
import { CreateForm } from './create.tsx';
import { UpdateForm } from './update.tsx';
import styles from '../../styles/pages/Books.module.scss';

function Translators() {
    const [visible, setVisible] = useState<boolean>(false);
    const [bookId, setBookId] = useState<number>();
    const { t } = useTranslation();
    const { isPending, error, data } = useQuery({
        queryKey: ['translators'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/translators').then((res) =>
                res.json()
            ),
    });

    if (isPending) return t('loading');

    if (error) return `${t('error.message')} ` + error.message;

    const onUpdate = (id: number) => {
        setVisible(true);
        setBookId(id);
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h2 className={styles.main__title}>
                    {t('table.translators.header')}
                </h2>
                <ListBooks data={data} onUpdate={onUpdate} />
                <Divider />
                <h3 className={styles.main__title}>
                    {t('table.translators.createTitle')}
                </h3>
                <CreateForm />
                <Divider />
                <UpdateForm
                    bookId={bookId}
                    visible={visible}
                    setVisible={setVisible}
                />
            </main>
            <Footer />
        </>
    );
}

export default Translators;
