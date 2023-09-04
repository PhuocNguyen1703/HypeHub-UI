import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import { BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Modal from '~/components/Modal/Modal';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import { MODAL_ADD_FRIEND } from '~/utils/constants';
import styles from './AddFriendModal.module.scss';

const cx = classNames.bind(styles);

function AddFriendModal() {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_ADD_FRIEND);

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
              <label className={cx('label')}>Add Friend</label>
              <span className={cx('desc')}>You can add friends with their email.</span>
              <div className={cx('input-group')}>
                <input type="text" className={cx('input')} placeholder="You can add friends with their email." />
                <button type="submit" className={cx('submit-btn')}>
                  Send Request
                </button>
              </div>
            </form>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
}

export default AddFriendModal;
