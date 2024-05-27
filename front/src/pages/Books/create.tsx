import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const CreateForm = () => {
    const { t } = useTranslation();
    return (
        <Form
            onFinish={(values) => {
                axios
                    .post('http://localhost:8080/api/v1/books/create', values)
                    .then(() => {
                        document.location.reload();
                    });
            }}
            style={{ margin: '0 auto', width: '50%' }}
            layout="vertical"
        >
            <Form.Item
                name="title"
                label={t('table.books.title')}
                rules={[{ required: true }]}
            >
                <Input placeholder={t('table.books.placeholders.title')} />
            </Form.Item>
            <Form.Item
                name="publishingHouse"
                label={t('table.books.publishingHouse')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.books.placeholders.publishingHouse')}
                />
            </Form.Item>
            <Form.Item
                name="languageOriginal"
                label={t('table.books.languageOriginal')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.books.placeholders.languageOriginal')}
                />
            </Form.Item>
            <Form.Item
                name="numberOfPages"
                label={t('table.books.numberOfPages')}
                rules={[{ required: true }]}
            >
                <InputNumber
                    placeholder={t('table.books.placeholders.numberOfPages')}
                    style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item
                name="publicationDate"
                label={t('table.books.publicationDate')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.books.placeholders.publicationDate')}
                />
            </Form.Item>
            <Form.Item
                name="type"
                label={t('table.books.type')}
                rules={[{ required: true }]}
            >
                <Input placeholder={t('table.books.placeholders.type')} />
            </Form.Item>
            <Form.Item
                name="cover"
                label={t('table.books.cover')}
                rules={[{ required: true }]}
            >
                <Input placeholder={t('table.books.placeholders.cover')} />
            </Form.Item>
            <Form.Item
                name="height"
                label={t('table.books.height')}
                rules={[{ required: true }]}
            >
                <InputNumber
                    placeholder={t('table.books.placeholders.height')}
                    style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item
                name="width"
                label={t('table.books.width')}
                rules={[{ required: true }]}
            >
                <InputNumber
                    placeholder={t('table.books.placeholders.width')}
                    style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item
                name="depth"
                label={t('table.books.depth')}
                rules={[{ required: true }]}
            >
                <InputNumber
                    placeholder={t('table.books.placeholders.depth')}
                    style={{ width: '100%' }}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="middle">
                    {t('table.books.btn')}
                </Button>
            </Form.Item>
        </Form>
    );
};
