import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const CreateForm = () => {
    const { t } = useTranslation();
    return (
        <Form
            onFinish={(values) => {
                axios
                    .post('http://localhost:8080/api/v1/authors/create', values)
                    .then(() => {
                        document.location.reload();
                    });
            }}
            style={{ margin: '0 auto', width: '50%' }}
            layout="vertical"
        >
            <Form.Item
                name="firstName"
                label={t('table.authors.firstName')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.authors.placeholders.firstName')}
                />
            </Form.Item>
            <Form.Item
                name="lastName"
                label={t('table.authors.lastName')}
                rules={[{ required: true }]}
            >
                <Input placeholder={t('table.authors.placeholders.lastName')} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="middle">
                    {t('table.authors.btn')}
                </Button>
            </Form.Item>
        </Form>
    );
};
