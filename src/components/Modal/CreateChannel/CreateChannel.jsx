import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BsCameraVideoFill, BsLockFill } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { FaHashtag, FaMicrophoneLines, FaXmark } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Dropdown from '~/components/Dropdown/Dropdown';
import Icon from '~/components/Icon/Icon';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import { MODAL_CREATE_CHANNEL } from '~/utils/constants';
import Modal from '../Modal';
import styles from './CreateChannel.module.scss';

const cx = classNames.bind(styles);

const CreateChannel = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [categoryValue, setCategoryValue] = useState('Option');
  const [typeValue, setTypeValue] = useState('Option');
  const categoryRef = useRef(null);
  const typeRef = useRef(null);
  const dispatch = useDispatch();

  const isModalOpen = isOpen & (modalType === MODAL_CREATE_CHANNEL);

  const categoryList = [
    { id: 1, title: 'General' },
    { id: 2, title: 'Rule' },
    { id: 3, title: 'Meeting' },
    { id: 4, title: 'Welcome' },
  ];
  const typeList = [
    { id: 1, leftIcon: <FaHashtag />, title: 'Text' },
    { id: 2, leftIcon: <FaMicrophoneLines />, title: 'Voice' },
    { id: 3, leftIcon: <BsCameraVideoFill />, title: 'Camera' },
  ];

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  const handleToggleCategoryDropdown = () => {
    setShowCategoryDropdown((prevState) => !prevState);
  };

  const handleToggleTypeDropdown = () => {
    setShowTypeDropdown((prevState) => !prevState);
  };

  const handleToggle = () => {};

  const handleSelectCategoryOption = (option) => {
    setCategoryValue(option);
    setShowCategoryDropdown(false);
  };

  const handleSelectTypeOption = (option) => {
    setTypeValue(option);
    setShowTypeDropdown(false);
  };

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
              <label className={cx('title')}>Create Channel</label>
              <label className={cx('channel-label')}>
                Channel Name
                <input className={cx('input')} type="text" placeholder="Please enter channel name." />
              </label>
              <div className={cx('category-and-type')}>
                <div className={cx('category-list')}>
                  <span className={cx('label')}>Category</span>
                  <span
                    className={cx('category-option', showCategoryDropdown && 'toggle-dropdown')}
                    onClick={handleToggleCategoryDropdown}
                  >
                    {categoryValue}
                    <Icon icon={<FaAngleRight />} className={cx('icon-dropdown')} />
                  </span>
                  <Dropdown
                    dropdownRef={categoryRef}
                    isShowDropdown={showCategoryDropdown}
                    setShowDropdown={setShowCategoryDropdown}
                    options={categoryList}
                    onChange={handleSelectCategoryOption}
                  />
                </div>
                <div className={cx('type-list')}>
                  <span className={cx('label')}>Channel Type</span>
                  <span
                    className={cx('type-option', showTypeDropdown && 'toggle-dropdown')}
                    onClick={handleToggleTypeDropdown}
                  >
                    {typeValue}
                    <Icon icon={<FaAngleRight />} className={cx('icon-dropdown')} />
                  </span>
                  <Dropdown
                    dropdownRef={typeRef}
                    isShowDropdown={showTypeDropdown}
                    setShowDropdown={setShowTypeDropdown}
                    options={typeList}
                    onChange={handleSelectTypeOption}
                  />
                </div>
              </div>
            </form>
            <section className={cx('private')}>
              <Icon icon={<BsLockFill />} className={cx('icon-lock')} />
              <span>Private Channel</span>
              <input type="checkbox" className={cx('checkbox')} name="toggleSwitch" onClick={handleToggle} readOnly />
            </section>
            <p className={cx('note')}>Only selected members and roles will be able to view this channel.</p>
            <div className={cx('action-group')}>
              <button type="button" className={cx('cancel-btn')} onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className={cx('save-btn')}>
                Create Channel
              </button>
            </div>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default CreateChannel;
