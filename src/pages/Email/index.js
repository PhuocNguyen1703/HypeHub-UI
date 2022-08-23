import React from 'react';
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
    BsFillRecordFill,
    BsFillStarFill,
} from 'react-icons/bs';

import styles from './Email.module.scss';
import Search from '~/layouts/components/Search';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';

const cx = classNames.bind(styles);

function Email() {
    const menu = [
        { icon: <BsEnvelope />, title: 'Inbox', path: '/email' },
        { icon: <BsCursor />, title: 'Sent', path: '/sent' },
        { icon: <BsFileEarmarkMinus />, title: 'Draft', path: '/title' },
        { icon: <BsStar />, title: 'Starred', path: '/starred' },
        { icon: <BsPatchExclamation />, title: 'Spam', path: '/spam' },
        { icon: <BsTrash />, title: 'Deleted', path: '/deleted' },
    ];

    const label = [
        { icon: <BsFillRecordFill />, color: 'forestgreen', title: 'Personal', path: '/personal' },
        { icon: <BsFillRecordFill />, color: 'indigo', title: 'Company', path: '/company' },
        { icon: <BsFillRecordFill />, color: 'orange', title: 'Important', path: '/important' },
        { icon: <BsFillRecordFill />, color: 'red', title: 'Private', path: '/private' },
    ];

    const email = [
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: 'What are you doing ?',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <header className={cx('heading')}>
                <div className={cx('title')}>
                    <h5>Email Inbox</h5>
                    <p>Send receive emails.</p>
                </div>
                <div>picker day</div>
            </header>
            <div className={cx('header')}>
                <div className={cx('nav')}>
                    <BsLayoutSidebar className={cx('icon')} />
                    <label className={cx('check-all')}>
                        <input type="checkbox" />
                        All
                    </label>
                    <BsArrowClockwise className={cx('icon')} />
                    <BsTrash className={cx('icon')} />
                </div>
                <div>15 of 12348</div>
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <button className={cx('create-email')}>
                        <BsPlus />
                        Create Email
                    </button>
                    {menu.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'menu-item'} />
                    ))}
                    <span className={cx('label')}>Labels</span>
                    {label.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'label-item'} />
                    ))}
                </div>
                <div className={cx('content')}>
                    {email.map((item, index) => (
                        <div key={index} className={cx('email-item')}>
                            <div className={cx('item-content')}>
                                <input type="checkbox" />
                                <BsFillStarFill
                                    className={cx('icon-star')}
                                    style={{ color: `${item.status.star && 'gold'}` }}
                                />
                                <BsPatchExclamation
                                    className={cx('icon-spam')}
                                    style={{ color: `${item.status.spam && 'red'}` }}
                                />
                                <div className={cx('item-title')}>
                                    <span>{item.sender}</span>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className={cx('date')}>
                                {item.type && (
                                    <BsFillRecordFill
                                        style={{
                                            color: `${
                                                (item.type === 'personal' && 'forestgreen') ||
                                                (item.type === 'company' && 'indigo') ||
                                                (item.type === 'important' && 'orange') ||
                                                (item.type === 'private' && 'red')
                                            }`,
                                        }}
                                    />
                                )}
                                <span>{item.createdAt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Email;
