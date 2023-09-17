import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import { MODAL_DELETE_ROOM } from '~/utils/constants';
import Modal from '../Modal';
import styles from './DeleteRoom.module.scss';

const cx = classNames.bind(styles);

const DeleteRoom = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_DELETE_ROOM);

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  if (isModalOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
              <CircleHeader />
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <FaXmark />
              </button>
            </header>
            <span className={cx('heading')}>Delete 'Room'</span>
            <span className={cx('warning-text')}>
              Are you sure you want to delete <strong>Room</strong>? This action cannot be undone.
            </span>
            <form className={cx('form')}>
              <label className={cx('label')}>
                Room Name <input className={cx('input')} type="text" placeholder="Please enter room name." />
              </label>
              <div className={cx('action-group')}>
                <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className={cx('join-btn')}>
                  Delete Room
                </button>
              </div>
            </form>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default DeleteRoom;
