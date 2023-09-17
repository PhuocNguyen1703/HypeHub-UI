import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';
import { BsGear, BsLink45Deg, BsTrash } from 'react-icons/bs';
import {
  FaAngellist,
  FaBity,
  FaFileMedical,
  FaFolderPlus,
  FaGg,
  FaGrunt,
  FaJava,
  FaJenkins,
  FaMicrochip,
  FaSnapchat,
  FaSpider,
  FaTheRedYeti,
  FaUserPlus,
} from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';
import { handleClickOutSide } from '~/utils/handleClickOutSide';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';
import styles from './RoomChat.module.scss';
import {
  MODAL_CREATE_CATEGORY,
  MODAL_CREATE_CHANNEL,
  MODAL_DELETE_ROOM,
  MODAL_INVITE_PEOPLE,
  MODAL_ROOM_SETTING,
} from '~/utils/constants';
import { useDispatch } from 'react-redux';
import { setModalOnOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

const RoomChat = () => {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const dispatch = useDispatch();
  const settingRef = useRef();

  const settingMenu = [
    {
      icon: <FaUserPlus />,
      title: 'Invite People',
      type: MODAL_INVITE_PEOPLE,
    },
    {
      icon: <FaFolderPlus />,
      title: 'Create Category',
      type: MODAL_CREATE_CATEGORY,
    },
    {
      icon: <FaFileMedical />,
      title: 'Create Channel',
      type: MODAL_CREATE_CHANNEL,
    },
    {
      icon: <BsGear />,
      title: 'Room Setting',
      type: MODAL_ROOM_SETTING,
    },
  ];

  const sidebar = [
    {
      title: 'Information',
      children: [
        {
          icon: <FaAngellist />,
          title: 'Welcome-and-rule',
          path: '',
        },
        {
          icon: <FaBity />,
          title: 'Announcement',
          path: 'asdasd',
        },
        {
          icon: <FaGg />,
          title: 'feedback',
          path: 'asdad',
        },
      ],
    },
    {
      title: 'Marketing',
      children: [
        {
          icon: <FaAngellist />,
          title: 'general',
          path: 'asd',
        },
        {
          icon: <FaBity />,
          title: 'culture',
          path: 'asdasd',
        },
        {
          icon: <FaGg />,
          title: 'marketing',
          path: 'asdad',
        },
        {
          icon: <FaGrunt />,
          title: 'study',
          path: 'asdad',
        },
        {
          icon: <FaJenkins />,
          title: 'school',
          path: 'asdad',
        },
        {
          icon: <FaJava />,
          title: 'fruit',
          path: 'asdad',
        },
        {
          icon: <FaSnapchat />,
          title: 'monkey',
          path: 'asdad',
        },
        {
          icon: <FaTheRedYeti />,
          title: 'cow',
          path: 'asdad',
        },
        {
          icon: <FaMicrochip />,
          title: 'bird',
          path: 'asdad',
        },
        {
          icon: <FaSpider />,
          title: 'chicken',
          path: 'asdad',
        },
      ],
    },
    {
      title: 'Marketing',
      children: [
        {
          icon: <FaAngellist />,
          title: 'general',
          path: 'asd',
        },
        {
          icon: <FaBity />,
          title: 'culture',
          path: 'asdasd',
        },
        {
          icon: <FaGg />,
          title: 'marketing',
          path: 'asdad',
        },
        {
          icon: <FaGrunt />,
          title: 'study',
          path: 'asdad',
        },
        {
          icon: <FaJenkins />,
          title: 'school',
          path: 'asdad',
        },
        {
          icon: <FaJava />,
          title: 'fruit',
          path: 'asdad',
        },
        {
          icon: <FaSnapchat />,
          title: 'monkey',
          path: 'asdad',
        },
        {
          icon: <FaTheRedYeti />,
          title: 'cow',
          path: 'asdad',
        },
        {
          icon: <FaMicrochip />,
          title: 'bird',
          path: 'asdad',
        },
        {
          icon: <FaSpider />,
          title: 'chicken',
          path: 'asdad',
        },
      ],
    },
    {
      title: 'Marketing',
      children: [
        {
          icon: <FaAngellist />,
          title: 'general',
          path: 'asd',
        },
        {
          icon: <FaBity />,
          title: 'culture',
          path: 'asdasd',
        },
        {
          icon: <FaGg />,
          title: 'marketing',
          path: 'asdad',
        },
        {
          icon: <FaGrunt />,
          title: 'study',
          path: 'asdad',
        },
        {
          icon: <FaJenkins />,
          title: 'school',
          path: 'asdad',
        },
        {
          icon: <FaJava />,
          title: 'fruit',
          path: 'asdad',
        },
        {
          icon: <FaSnapchat />,
          title: 'monkey',
          path: 'asdad',
        },
        {
          icon: <FaTheRedYeti />,
          title: 'cow',
          path: 'asdad',
        },
        {
          icon: <FaMicrochip />,
          title: 'bird',
          path: 'asdad',
        },
        {
          icon: <FaSpider />,
          title: 'chicken',
          path: 'asdad',
        },
      ],
    },
  ];

  useEffect(() => {
    handleClickOutSide(isShowSetting, setIsShowSetting, settingRef);
  }, [isShowSetting]);

  const handleToggleSetting = () => {
    setIsShowSetting(true);
  };

  const handleSelectMenu = (type) => {
    dispatch(setModalOnOpen(type));
    setIsShowSetting(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <header className={cx('header')}>
          <img
            className={cx('banner')}
            src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="banner"
          />
          <div className={cx('room-info')}>
            <div className={cx('setting')} onClick={handleToggleSetting}>
              <span className={cx('room-name')}>User's room</span>
              <Icon icon={<BsGear />} className={cx('icon-setting')} />
            </div>
            {isShowSetting && (
              <div ref={settingRef} className={cx('setting-dropdown')}>
                {settingMenu.map((item, idx) => (
                  <button
                    key={idx}
                    className={cx('option-setting', { separate: item.separate })}
                    onClick={() => handleSelectMenu(item.type)}
                  >
                    <span className={cx('title')}>{item.title}</span>
                    <Icon icon={item.icon} size="1.6rem" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className={cx('category')}>
          {sidebar.map((item, index) => (
            <CategoryMenu key={index} item={item} />
          ))}
        </div>
      </div>
      <div className={cx('container')}>
        <Outlet />
      </div>
    </div>
  );
};

export default RoomChat;
