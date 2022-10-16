import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Notification.module.scss';
import { useDispatch } from 'react-redux';
import { setNotificationModalIsOpen } from '~/redux/Slice/modalSlice';
import { BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Image from '../Image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

function Notification() {
    const { notificationModalIsOpen } = useSelector((state) => state.modal);
    const [isAll, setIsAll] = useState(true);
    const [isCompany, setIsCompany] = useState(false);
    const [isPersonal, setIsPersonal] = useState(false);
    const dispatch = useDispatch();

    const notificationItem = [
        {
            avatar: 'https://images.unsplash.com/photo-1546753051-f9cbab09c91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-10-05',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1645378999488-63138abdecd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'upload a file',
            isWatch: false,
            createAt: '2022-10-03',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1645830166230-187caf791b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a deadline',
            isWatch: true,
            createAt: '2022-09-17',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-10-01',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1624561261145-351e786934b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: true,
            createAt: '2022-10-05',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message from chat width friend in the New York as asdbiyuw asd wad sz awdasd aw ',
            isWatch: true,
            createAt: '2021-12-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2000-11-01',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1625426193702-15200f5c008f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2021-12-25',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-03-17',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1546753051-f9cbab09c91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-10-05',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1645378999488-63138abdecd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'upload a file',
            isWatch: true,
            createAt: '2022-10-03',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1645830166230-187caf791b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a deadline',
            isWatch: false,
            createAt: '2022-09-17',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: true,
            createAt: '2022-10-01',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1624561261145-351e786934b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: true,
            createAt: '2022-10-05',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2022-10-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message from chat width friend in the New York as asdbiyuw asd wad sz awdasd aw ',
            isWatch: true,
            createAt: '2021-12-11',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2000-11-01',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1625426193702-15200f5c008f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: false,
            createAt: '2021-12-25',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGF2YXRhciUyMGF2ZW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            fullName: 'Victoria Secret',
            content: 'sent a message',
            isWatch: true,
            createAt: '2022-03-17',
        },
    ];

    const handleCloseModal = () => {
        dispatch(setNotificationModalIsOpen(false));
    };

    const handleAll = () => {
        setIsAll(true);
        setIsCompany(false);
        setIsPersonal(false);
    };

    const handleCompany = () => {
        setIsAll(false);
        setIsCompany(true);
        setIsPersonal(false);
    };

    const handlePersonal = () => {
        setIsAll(false);
        setIsCompany(false);
        setIsPersonal(true);
    };

    return (
        <motion.div animate={{ width: notificationModalIsOpen ? '400px' : '0' }} className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('title')}>Notifications</div>
                <button className={cx('close-btn')} onClick={handleCloseModal}>
                    <BsXLg />
                </button>
                <span className={cx('mark-all-as-read')}>Mark all as read</span>
            </header>
            <nav className={cx('navbar')}>
                <span className={cx('all', isAll && 'active')} onClick={handleAll}>
                    All
                </span>
                <span className={cx('company', isCompany && 'active')} onClick={handleCompany}>
                    Company
                </span>
                <span className={cx('personal', isPersonal && 'active')} onClick={handlePersonal}>
                    Personal
                </span>
            </nav>
            <div className={cx('container')}>
                {notificationItem.map((item, idx) => (
                    <div className={cx('item', item?.isWatch ? 'watched' : '')} key={idx}>
                        <Image src={item?.avatar} className={cx('avatar')} alt="avatar" />
                        <div className={cx('notification')}>
                            <p className={cx('content')}>
                                <strong className={cx('name')}>{item?.fullName}</strong>
                                {item?.content}
                            </p>
                            <span className={cx('time')}>{dayjs(item?.createAt).fromNow()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Notification;
