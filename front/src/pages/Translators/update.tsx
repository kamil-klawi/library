import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { ModalProps } from '../../types/modals.ts';

export const UpdateForm: FC<ModalProps> = ({ bookId, visible, setVisible }) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    axios
        .get(`http://localhost:8080/api/v1/translators/${bookId}`)
        .then((value) => {
            form.setFieldsValue({
                firstName: value.data.firstName,
                lastName: value.data.lastName,
                languageRelease: value.data.languageRelease,
            });
        });

    return (
        <Modal
            footer
            open={visible}
            onCancel={() => setVisible(false)}
            title={t('table.translators.updateTitle')}
        >
            <Form
                form={form}
                onFinish={(values) => {
                    axios
                        .put(
                            `http://localhost:8080/api/v1/translators/update/${bookId}`,
                            values
                        )
                        .then(() => {
                            setVisible(false);
                            document.location.reload();
                        });
                }}
                layout="vertical"
            >
                <Form.Item
                    name="firstName"
                    label={t('table.translators.firstName')}
                    rules={[{ required: true }]}
                >
                    <Input
                        placeholder={t(
                            'table.translators.placeholders.firstName'
                        )}
                    />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label={t('table.translators.lastName')}
                    rules={[{ required: true }]}
                >
                    <Input
                        placeholder={t(
                            'table.translators.placeholders.lastName'
                        )}
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
        </Modal>
    );
};
