import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_LEAVE_ROOM } from '~/utils/constants';
import styles from './LeaveRoom.module.scss';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import Modal from '../Modal';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { FaXmark } from 'react-icons/fa6';

const cx = classNames.bind(styles);

const LeaveRoom = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_LEAVE_ROOM);

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
            <span className={cx('heading')}>Leave 'Room'</span>
            <span className={cx('warning-text')}>
              Are you sure you want to leave <strong>Room</strong>? You won't be able to rejoin this server unless you
              are re-invited.
            </span>
            <div className={cx('action-group')}>
              <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className={cx('leave-btn')}>
                Leave Room
              </button>
            </div>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default LeaveRoom;
