import classNames from 'classnames/bind';
import { useState } from 'react';

import { BsPeople } from 'react-icons/bs';
import Search from '~/components/Search/Message/Message';
import  AddFriendModal  from '../Modal/AddFriendModal';
import styles from './Friends.module.scss';
import RenderListUser from './layouts/RenderListUser';

const cx = classNames.bind(styles);

function Friends() {
    const [activeButton, setActiveButton] = useState('online');
    const [isOpenAddFriendModal, setIsOpenAddFriendModal] = useState(false);

    const userList = [
        {
            id: 1,
            avatar: 'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria',
            status: false,
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Brian Nguyen',
            status: true,
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Yamamoto Yuki',
            status: true,
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Thomson',
            status: false,
        },
        {
            id: 5,
            avatar: 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Alex Nguyen',
            status: false,
        },
        {
            id: 6,
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Tony',
            status: true,
        },
    ];

    const handleOnBtn = (e) => {
        setActiveButton(e.target.id);
    };

    const handleToggleAddFriendModal = () => {
        setIsOpenAddFriendModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('friends')}>
                    <span className={cx('icon-friend')}>
                        <BsPeople />
                    </span>
                    Friends
                </span>
                <button
                    id="online"
                    className={cx('online-btn', activeButton === 'online' && 'isActive')}
                    onClick={(e) => handleOnBtn(e)}
                >
                    Online
                </button>
                <button
                    id="all"
                    className={cx('all-btn', activeButton === 'all' && 'isActive')}
                    onClick={(e) => handleOnBtn(e)}
                >
                    All
                </button>
                <button
                    id="pending"
                    className={cx('pending-btn', activeButton === 'pending' && 'isActive')}
                    onClick={(e) => handleOnBtn(e)}
                >
                    Pending
                </button>
                <button
                    id="blocked"
                    className={cx('blocked-btn', activeButton === 'blocked' && 'isActive')}
                    onClick={(e) => handleOnBtn(e)}
                >
                    Blocked
                </button>
                <button className={cx('add-friend-btn')} onClick={handleToggleAddFriendModal}>
                    Add Friend
                </button>
            </header>
            <div className={cx('container')}>
                <div className={cx('container-header')}>
                    <div className={cx('search')}>
                        <Search />
                    </div>
                    <span className={cx('total-user')}>Online-10</span>
                </div>
                <div className={cx('layout')}>
                    <RenderListUser userList={userList} />
                </div>
            </div>

            {isOpenAddFriendModal && <AddFriendModal isOpen={isOpenAddFriendModal} isHide={setIsOpenAddFriendModal} />}
        </div>
    );
}

export default Friends;
