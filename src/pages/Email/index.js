import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
    BsLayoutSidebar,
    BsArrowClockwise,
    BsTrash,
    BsPlus,
    BsCursor,
    BsEnvelope,
    BsFileEarmarkMinus,
    BsStar,
    BsPatchExclamation,
    BsFillStarFill,
} from 'react-icons/bs';

import styles from './Email.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import ComposeEmail from '~/components/Modal/ComposeEmail';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import EmailInfo from '~/components/Modal/EmailInfo';
import { setSelectedItem } from '~/redux/Slice/emailSlice';

const cx = classNames.bind(styles);

function Email() {
    const [showComposeEmailModal, setShowComposeEmailModal] = useState(false);
    const [showEmailInfoModal, setShowEmailInfoModal] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsEnvelope />, title: 'Inbox', path: '/email' },
        { icon: <BsCursor />, title: 'Sent', path: '/email/sent' },
        { icon: <BsFileEarmarkMinus />, title: 'Draft', path: '/email/draft' },
        { icon: <BsStar />, title: 'Starred', path: '/email/starred' },
        { icon: <BsPatchExclamation />, title: 'Spam', path: '/email/spam' },
        { icon: <BsTrash />, title: 'Deleted', path: '/email/deleted' },
    ];

    const email = [
        {
            sender: 'Nguyễn Thị Hồng Vân',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: false, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: true, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: false, spam: false },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: false, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: true, spam: false },
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'Meeting now ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: false, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'What are you doing ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: true, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'asdasdasds',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: true, spam: false },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: false, spam: false },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: false, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: false, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: true, spam: true },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: true, star: false, spam: false },
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            email: 'admin@gmail.com',
            to: 'admin1@gmail.com',
            subject: 'How are you today ?',
            content:
                'What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! What do you do! ',
            status: { watched: false, star: false, spam: true },
            createdAt: 'Feb 22',
        },
    ];

    const handleHiddenSidebar = () => {
        setIsHidden((prevState) => !prevState);
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleComposeEmail = () => {
        setShowComposeEmailModal(true);
    };

    const handleCheckedOnChange = () => {};

    const handleSelectedItem = (item) => {
        dispatch(setSelectedItem(item));
        setShowEmailInfoModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('heading')}>
                <div className={cx('title')}>
                    <h5>Email Inbox</h5>
                    <p>Send receive emails.</p>
                </div>
            </header>
            <div className={cx('header')}>
                <div className={cx('nav')}>
                    <span className={cx('icon')} onClick={handleHiddenSidebar}>
                        <BsLayoutSidebar />
                    </span>
                    <span className={cx('icon')} onClick={handleRefresh}>
                        <BsArrowClockwise />
                    </span>
                    <span className={cx('icon')}>
                        <BsTrash />
                    </span>
                </div>
                <span>Total: {email.length}</span>
            </div>
            <div className={cx('container')}>
                <motion.div
                    initial={{ width: '250px' }}
                    animate={{ width: isHidden ? '0' : '250px', transition: { duration: 0.8 } }}
                    className={cx('sidebar')}
                >
                    <button className={cx('create-email')} onClick={handleComposeEmail}>
                        <BsPlus />
                        Compose
                    </button>
                    {menu.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </motion.div>
                <div className={cx('content')}>
                    {email.map((item, index) => (
                        <div key={index} className={cx('email-item')} onClick={() => handleSelectedItem(item)}>
                            <div className={cx('item-content')}>
                                <div className={cx('content-left')}>
                                    <input
                                        type="checkbox"
                                        checked={item.status.watched}
                                        onChange={handleCheckedOnChange}
                                    />
                                    <BsFillStarFill
                                        className={cx('icon-star')}
                                        style={{ color: `${item.status.star && 'gold'}` }}
                                    />
                                    <BsPatchExclamation
                                        className={cx('icon-spam')}
                                        style={{ color: `${item.status.spam && 'red'}` }}
                                    />
                                </div>
                                <div className={cx('item-title')}>
                                    <span>{item.sender}</span>
                                    <p>{item.subject}</p>
                                </div>
                            </div>
                            <span className={cx('date')}>{item.createdAt}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ComposeEmail show={showComposeEmailModal} setShowComposeEmailModal={setShowComposeEmailModal} />

            <EmailInfo show={showEmailInfoModal} setShowEmailInfoModal={setShowEmailInfoModal} />
        </div>
    );
}

export default Email;
