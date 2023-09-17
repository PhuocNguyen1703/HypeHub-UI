import classNames from 'classnames/bind';

import styles from './CreateCategory.module.scss';
import { FaLock, FaXmark } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import { MODAL_CREATE_CATEGORY } from '~/utils/constants';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Icon from '~/components/Icon/Icon';
import { BsLockFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const CreateCategory = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_CREATE_CATEGORY);

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  const handleToggle = () => {};

  if (isModalOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
              <CircleHeader wrapperClassName={cx('wrapperClassName')} />
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <FaXmark />
              </button>
            </header>
            <form className={cx('form')}>
              <label className={cx('title')}>Create Category</label>
              <label className={cx('category-label')}>
                Category Name
                <input className={cx('input')} type="text" placeholder="Please enter category name." />
              </label>
            </form>
            <section className={cx('private')}>
              <Icon icon={<BsLockFill />} className={cx('icon-lock')} />
              <span>Private Category</span>
              <input type="checkbox" className={cx('checkbox')} name="toggleSwitch" onClick={handleToggle} readOnly />
            </section>
            <p className={cx('note')}>
              By making a category private, only select members and roles will be able to view this category. Synced
              channels in this category will automatically match to this setting.
            </p>
            <div className={cx('action-group')}>
              <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className={cx('save-btn')}>
                Create Category
              </button>
            </div>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default CreateCategory;
