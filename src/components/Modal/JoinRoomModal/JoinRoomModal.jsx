import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import { MODAL_JOIN_ROOM } from '~/utils/constants';
import Modal from '../Modal';
import styles from './JoinRoomModal.module.scss';

const cx = classNames.bind(styles);

const JoinRoomModal = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_JOIN_ROOM);

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  if (isModalOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
              <CircleHeader wrapperClassName={cx('wrapperClassName')} />
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <BsXLg />
              </button>
            </header>
            <form className={cx('form')}>
              <label className={cx('label')}>Room Invite Code</label>
              <input className={cx('input')} type="text" placeholder="Please enter code here." />
              <div className={cx('action-group')}>
                <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className={cx('join-btn')}>
                  Join
                </button>
              </div>
            </form>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default JoinRoomModal;
