import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
    bookId?: number;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}
