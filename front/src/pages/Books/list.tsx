import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Book } from '../../types/book.ts';

interface ListProps {
    data: any;
    onUpdate: (id: number) => void;
}

export const ListBooks: FC<ListProps> = ({ data, onUpdate }) => {
    const { t } = useTranslation();
    return (
        <Table
            key="books"
            style={{ textWrap: 'nowrap', width: '100%' }}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            bordered
            scroll={{ x: '100%' }}
        >
            <Table.Column title="Id" dataIndex="id" key="id" />
            <Table.Column
                title={t('table.books.title')}
                dataIndex="title"
                key="title"
            />
            <Table.Column
                title={t('table.books.publishingHouse')}
                dataIndex="publishingHouse"
                key="publishingHouse"
            />
            <Table.Column
                title={t('table.books.languageOriginal')}
                dataIndex="languageOriginal"
                key="languageOriginal"
            />
            <Table.Column
                title={t('table.books.numberOfPages')}
                dataIndex="numberOfPages"
                key="numberOfPages"
            />
            <Table.Column
                title={t('table.books.publicationDate')}
                dataIndex="publicationDate"
                key="publicationDate"
            />
            <Table.Column
                title={t('table.books.type')}
                dataIndex="type"
                key="type"
            />
            <Table.Column
                title={t('table.books.cover')}
                dataIndex="cover"
                key="cover"
            />
            <Table.Column
                title={t('table.books.height')}
                dataIndex="height"
                key="height"
            />
            <Table.Column
                title={t('table.books.width')}
                dataIndex="width"
                key="width"
            />
            <Table.Column
                title={t('table.books.depth')}
                dataIndex="depth"
                key="depth"
            />
            <Table.Column<Book>
                title={t('table.actions')}
                dataIndex="actions"
                key="actions"
                render={(_, values) => (
                    <>
                        <Space>
                            <Button
                                onClick={() => {
                                    axios
                                        .delete(
                                            `http://localhost:8080/api/v1/books/delete/${values.id}`
                                        )
                                        .then(() => {
                                            document.location.reload();
                                        });
                                }}
                                danger
                                children={t('table.delete')}
                            />
                            <Button
                                onClick={() => {
                                    onUpdate(values.id);
                                }}
                                children={t('table.update')}
                            />
                        </Space>
                    </>
                )}
            />
        </Table>
    );
};
