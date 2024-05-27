import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const CreateForm = () => {
    const { t } = useTranslation();

    return (
        <Form
            onFinish={(values) => {
                axios
                    .post(
                        'http://localhost:8080/api/v1/translators/create',
                        values
                    )
                    .then(() => {
                        document.location.reload();
                    });
            }}
            style={{ margin: '0 auto', width: '50%' }}
            layout="vertical"
        >
            <Form.Item
                name="firstName"
                label={t('table.translators.firstName')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.translators.placeholders.firstName')}
                />
            </Form.Item>
            <Form.Item
                name="lastName"
                label={t('table.translators.lastName')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t('table.translators.placeholders.lastName')}
                />
            </Form.Item>
            <Form.Item
                name="languageRelease"
                label={t('table.translators.languageRelease')}
                rules={[{ required: true }]}
            >
                <Input
                    placeholder={t(
                        'table.translators.placeholders.languageRelease'
                    )}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="middle">
                    {t('table.translators.btn')}
                </Button>
            </Form.Item>
        </Form>
    );
};
