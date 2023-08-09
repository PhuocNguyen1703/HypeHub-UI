import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    BsArrowClockwise,
    BsCursor,
    BsEnvelope,
    BsFileEarmarkMinus,
    BsFillStarFill,
    BsLayoutSidebar,
    BsPatchExclamation,
    BsStar,
    BsTrash
} from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import ComposeEmail from '~/components/Modal/ComposeEmail/ComposeEmail';
import EmailInfo from '~/components/Modal/EmailInfo/EmailInfo';
import SidebarEmail from '~/layouts/components/SidebarEmail/SidebarEmail';
import { setSelectedItem } from '~/redux/Slice/emailSlice';
import styles from './Email.module.scss';

const cx = classNames.bind(styles);

function Email() {
    const [showComposeEmailModal, setShowComposeEmailModal] = useState(false);
    const [showEmailInfoModal, setShowEmailInfoModal] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsEnvelope />, title: 'Inbox', path: '' },
        { icon: <BsCursor />, title: 'Sent', path: 'sent' },
        { icon: <BsFileEarmarkMinus />, title: 'Draft', path: 'draft' },
        { icon: <BsStar />, title: 'Starred', path: 'starred' },
        { icon: <BsPatchExclamation />, title: 'Spam', path: 'spam' },
        { icon: <BsTrash />, title: 'Deleted', path: 'deleted' },
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
        setToggleSidebar((prevState) => !prevState);
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
            <header className={cx('header')}>
                <div className={cx('title')}>
                    <h5>Email Inbox</h5>
                    <p>Send receive emails.</p>
                </div>
                <div className={cx('nav')}>
                    <div className={cx('nav-left')}>
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
                    <span className={cx('total-email')}>Total: {email.length}</span>
                </div>
            </header>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <SidebarEmail
                        menu={menu}
                        show={toggleSidebar}
                        setToggleSidebar={setToggleSidebar}
                        onclick={handleComposeEmail}
                    />
                </div>
                <div className={cx('content')}>
                    {email.map((item, index) => (
                        <div key={index} className={cx('email-item')} onClick={() => handleSelectedItem(item)}>
                            <div className={cx('content-left')}>
                                <input type="checkbox" checked={item.status.watched} onChange={handleCheckedOnChange} />
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
