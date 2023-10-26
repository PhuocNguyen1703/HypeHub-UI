import classNames from 'classnames/bind';
import { useState } from 'react';
import 'react-18-image-lightbox/style.css';

import Tippy from '@tippyjs/react';
import { BsCameraVideoFill, BsFillGearFill, BsRecord2Fill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import { HideSideBarIcon, PhoneIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import DirectConversation from '../DirectConversation/DirectConversation';
import InviteFriend from '../InviteFriend/InviteFriend';
import MemberList from '../MemberList/MemberList';
import UserProfile from '../UserProfile/UserProfile';
import styles from './DirectMessageChatBox.module.scss';
import { useDispatch } from 'react-redux';
import { setModalOnOpen } from '~/redux/Slice/modalSlice';
import { MODAL_DM_SETTING } from '~/utils/constants';

const cx = classNames.bind(styles);

function DirectMessageChatBox() {
  const { conversation } = useOutletContext();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showInviteFriend, setShowInviteFriend] = useState(false);
  const dispatch = useDispatch();
  console.log(conversation);

  //Fetching data for header
  // useEffect(() => {
  //     const userId = chat?.members?.find((id) => id !== currentUserId);

  //     const getUserData = async () => {
  //         try {
  //             const { data } = await getUser(userId);
  //             setUserData(data);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };
  //     if (chat !== null) getUserData();
  // }, [chat, currentUserId]);

  //Fetching data for messages
  // useEffect(() => {
  //     const MessagesData = async () => {
  //         try {
  //             const { data } = await getMessages(chat._id);
  //             setMessages(data);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };
  //     if (chat !== null) MessagesData();
  // }, [chat]);

  const handleToggleSidebarRight = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const handleToggleSetting = () => {
    dispatch(setModalOnOpen(MODAL_DM_SETTING));
  };

  const handleToggleInviteFriend = () => {
    setShowInviteFriend(true);
  };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <div className={cx('header-left')}>
          <div className={cx('user-info')}>
            <div className={cx('avatar')}>
              <Image className={cx('photo')} src={conversation?.cover_avatar} alt="avatar" />
              <span className={cx('icon-dot')}>
                <BsRecord2Fill />
              </span>
            </div>
            <div className={cx('user-name')}>
              <span className={cx('name')}>{conversation.members?.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className={cx('header-right')}>
          <div>
            <Tippy delay={[0, 50]} interactive content="Voice call">
              <button className={cx('voice-call-btn')}>
                <PhoneIcon />
              </button>
            </Tippy>
          </div>
          <div>
            <Tippy delay={[0, 50]} interactive content="Video call">
              <button className={cx('video-call-btn')}>
                <BsCameraVideoFill />
              </button>
            </Tippy>
          </div>
          {conversation.members.length > 2 && (
            <div className={cx('invite-friend')}>
              <Tippy delay={[0, 50]} interactive content="Add friends">
                <button className={cx('add-friend-btn')} onClick={handleToggleInviteFriend}>
                  <FaUserPlus />
                </button>
              </Tippy>
              {showInviteFriend && (
                <InviteFriend
                  isOpen={showInviteFriend}
                  isHide={setShowInviteFriend}
                  currentMembers={conversation.members}
                />
              )}
            </div>
          )}
          <div>
            <Tippy
              delay={[0, 50]}
              interactive
              content={conversation.members.length > 2 ? 'Toggle Member List' : 'Toggle User Profile'}
            >
              <button className={cx('toggle-sidebar-right-btn')} onClick={handleToggleSidebarRight}>
                <HideSideBarIcon />
              </button>
            </Tippy>
          </div>
          <div>
            <Tippy delay={[0, 50]} interactive content="Setting">
              <button className={cx('setting-btn')} onClick={handleToggleSetting}>
                <BsFillGearFill />
              </button>
            </Tippy>
          </div>
        </div>
      </header>

      <div className={cx('container')}>
        <DirectConversation conversation={conversation} />
        {showSidebar &&
          (conversation.members?.length > 1 ? <MemberList conversation={conversation} /> : <UserProfile />)}
      </div>
    </div>
  );
}

export default DirectMessageChatBox;
