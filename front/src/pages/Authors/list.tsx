import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Author } from '../../types/author.ts';

interface ListProps {
    data: any;
    onUpdate: (id: number) => void;
}

export const ListAuthors: FC<ListProps> = ({ data, onUpdate }) => {
    const { t } = useTranslation();
    return (
        <Table
            key="authors"
            style={{ textWrap: 'nowrap', width: '100%' }}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            bordered
            scroll={{ x: '100%' }}
        >
            <Table.Column title="Id" dataIndex="id" key="id" />
            <Table.Column
                title={t('table.authors.firstName')}
                dataIndex="firstName"
                key="firstName"
            />
            <Table.Column
                title={t('table.authors.lastName')}
                dataIndex="lastName"
                key="lastName"
            />
            <Table.Column<Author>
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
                                            `http://localhost:8080/api/v1/authors/delete/${values.id}`
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
