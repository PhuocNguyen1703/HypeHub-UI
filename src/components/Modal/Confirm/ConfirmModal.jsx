import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import HTMLReactParser from 'html-react-parser';
import { BsXLg } from 'react-icons/bs';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '~/utils/constants';
import Modal from '../Modal';
import styles from './ConfirmModal.module.scss';

const cx = classNames.bind(styles);

function ConfirmModal({ show, board, title, content, onAction }) {
    const handleClose = () => {
        onAction(MODAL_ACTION_CLOSE);
    };

    const handleCancel = () => {
        handleClose();
    };

    const handleSave = () => {
        onAction(MODAL_ACTION_CONFIRM, board);
    };

    if (show) {
        return (
            <Modal>
                <motion.div
                    initial={{ x: '-50%', y: '-50%', scale: 0 }}
                    animate={{ scale: 1 }}
                    className={cx('wrapper')}
                >
                    <header className={cx('header')}>
                        <span className={cx('title')}>{title}</span>
                        <span className={cx('close-btn')} onClick={handleClose}>
                            <BsXLg />
                        </span>
                    </header>
                    <div className={cx('body')}>
                        <p className={cx('content')}>{HTMLReactParser(content)}</p>
                        <div className={cx('action-btn')}>
                            <button className={cx('cancel-btn')} onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className={cx('save-btn')} onClick={handleSave}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Modal>
        );
    }
}

export default ConfirmModal;
