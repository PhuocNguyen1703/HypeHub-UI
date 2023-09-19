import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ChannelDetail.module.scss';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import Modal from '../Modal';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { FaHashtag, FaXmark } from 'react-icons/fa6';
import { MODAL_CHANNEL_DETAIL } from '~/utils/constants';
import Icon from '~/components/Icon/Icon';

const cx = classNames.bind(styles);

const ChannelDetail = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_CHANNEL_DETAIL);

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
            <span className={cx('title')}>
              <Icon icon={<FaHashtag />} size="2rem" />
              Welcome-and-rules
            </span>
            <span className={cx('topic')}>
              Are you sure you want to leave <strong>Room</strong>? You won't be able to rejoin this server unless you
              are re-invited.
            </span>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default ChannelDetail;
