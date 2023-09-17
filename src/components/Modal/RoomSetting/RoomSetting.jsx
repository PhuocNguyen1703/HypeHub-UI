import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOnClose, setModalOnOpen } from '~/redux/Slice/modalSlice';
import { MODAL_DELETE_ROOM, MODAL_ROOM_SETTING } from '~/utils/constants';
import Modal from '../Modal';

import { FaXmark } from 'react-icons/fa6';
import Icon from '~/components/Icon/Icon';
import styles from './RoomSetting.module.scss';
import MenuItem from './MenuItem';
import { BsTrash } from 'react-icons/bs';
import { useState } from 'react';
import OverView from '~/pages/Chat/layouts/RoomChat/Layouts/OverView/OverView';
import Role from '~/pages/Chat/layouts/RoomChat/Layouts/Role/Role';

const cx = classNames.bind(styles);

const RoomSetting = () => {
  const views = {
    overview: OverView,
    roles: Role,
  };

  const menu = [
    {
      icon: '',
      title: 'Room Info',
      children: [
        {
          icon: '',
          title: 'Overview',
        },
        {
          icon: '',
          title: 'Roles',
        },
      ],
    },
    {
      icon: '',
      title: 'User Management',
      children: [
        {
          icon: '',
          title: 'Members',
        },
        {
          icon: '',
          title: 'Invites',
        },
      ],
    },
    {
      icon: '',
      title: 'Others',
      children: [
        {
          icon: '',
          title: 'Members',
        },
        {
          icon: '',
          title: 'Invites',
        },
      ],
    },
  ];

  const { isOpen, modalType } = useSelector((state) => state.modal);
  const [view, setView] = useState('overview');
  const dispatch = useDispatch();

  const CurrentView = views[view];

  const isModalOpen = isOpen & (modalType === MODAL_ROOM_SETTING);

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  const handleToggleDeleteRoomModal = () => {
    dispatch(setModalOnOpen(MODAL_DELETE_ROOM));
  };

  const handleRenderView = (view) => {
    setView(view);
  };

  if (isModalOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <div className={cx('sidebar')}>
              <div className={cx('menu')}>
                {menu.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAction={handleRenderView} />
                ))}
                <button className={cx('delete-btn')} onClick={handleToggleDeleteRoomModal}>
                  Delete Room
                  <Icon icon={<BsTrash />} />
                </button>
              </div>
            </div>
            <div className={cx('content')}>
              <CurrentView />
            </div>
            <div className={cx('close')}>
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <Icon icon={<FaXmark />} size="2rem" />
              </button>
              ESC
            </div>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default RoomSetting;
