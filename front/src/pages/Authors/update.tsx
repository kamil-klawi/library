import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { ModalProps } from '../../types/modals.ts';

export const UpdateForm: FC<ModalProps> = ({ bookId, visible, setVisible }) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    axios
        .get(`http://localhost:8080/api/v1/authors/${bookId}`)
        .then((value) => {
            form.setFieldsValue({
                firstName: value.data.firstName,
                lastName: value.data.lastName,
            });
        });

    return (
        <Modal
            footer
            open={visible}
            onCancel={() => setVisible(false)}
            title={t('table.authors.updateTitle')}
        >
            <Form
                form={form}
                onFinish={(values) => {
                    axios
                        .put(
                            `http://localhost:8080/api/v1/authors/update/${bookId}`,
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
                    <Input
                        placeholder={t('table.authors.placeholders.lastName')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">
                        {t('table.authors.btn')}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
