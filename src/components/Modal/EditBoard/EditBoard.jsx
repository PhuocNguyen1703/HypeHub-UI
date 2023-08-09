import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BsXLg } from 'react-icons/bs';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '~/utils/constants';
import Modal from '../Modal';
import styles from './EditBoardModal.module.scss';

const cx = classNames.bind(styles);

function EditBoardModal({ show, board, onAction }) {
    const { register, handleSubmit, reset } = useForm();

    const handleCloseModal = () => {
        reset();
        onAction(MODAL_ACTION_CLOSE);
    };

    const handleCancel = () => {
        handleCloseModal();
    };

    const onSubmit = (data) => {
        onAction(MODAL_ACTION_CONFIRM, data, board);
        reset();
    };

    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <div>
                                <Tippy delay={[0, 50]} interactive content="Close">
                                    <button className={cx('close-btn')} onClick={handleCloseModal}>
                                        <BsXLg />
                                    </button>
                                </Tippy>
                            </div>
                        </header>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('title')}>
                                <input
                                    className={cx('title-ipt')}
                                    type="text"
                                    name="title"
                                    required
                                    autoFocus
                                    defaultValue={board.title}
                                    {...register('title')}
                                />
                                <span className={cx('underline-title-ipt')}></span>
                                <label className={cx('label')}>Title</label>
                            </div>
                            <footer className={cx('action-btn')}>
                                <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button className={cx('save-btn')} type="submit">
                                    Save Changes
                                </button>
                            </footer>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default EditBoardModal;
