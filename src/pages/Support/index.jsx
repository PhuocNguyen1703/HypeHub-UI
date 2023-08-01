import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Support.module.scss';
import { BsArrowBarUp, BsClipboardMinus, BsDownload, BsFillCloudArrowUpFill } from 'react-icons/bs';
import { FaCheck, FaTimes } from 'react-icons/fa';
import SupportTicketInfo from '~/components/Modal/SupportTicketInfo';

const cx = classNames.bind(styles);

function Support() {
    const [showSupportTicketInfoModal, setShowSupportTicketInfoModal] = useState(false);
    const [supportTicket, setSupportTicket] = useState({});

    const tableTicket = [
        {
            id: 'SR#135267859',
            subject: 'Support password',
            content: 'This is content',
            image: 'asdadad',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'In process',
            comment: '',
        },
        {
            id: 'SR#135216859',
            subject: 'Support password',
            content: 'This is content',
            image: 'sasd',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'In process',
            comment: 'This is comment',
        },
        {
            id: 'SR#765267859',
            subject: 'Support password',
            content: 'This is content',
            image: '',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'Cancel',
            comment: '',
        },
        {
            id: 'SR#135107859',
            subject: 'Support password',
            content: ' This is content This is content This is content This is content This is content This is content',
            image: '',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'Approve',
            comment: 'This is comment',
        },
        {
            id: 'SR#135224859',
            subject: 'Support password',
            content: 'This is content',
            image: 'dasdad',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'Cancel',
            comment: '',
        },
        {
            id: 'SR#135767859',
            subject: 'Support password',
            content: 'This is content',
            image: '',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'Approve',
            comment: 'This is comment',
        },
        {
            id: 'SR#130867859',
            subject: 'Support password',
            content: 'This is content',
            image: 'asdasd',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'In process',
            comment: '',
        },
    ];

    const handleToggleSupportTicketInfo = (item) => {
        setShowSupportTicketInfoModal(true);
        setSupportTicket(item);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Support Ticket</span>
                <span className={cx('sub-title')}>When you have problems, you can send support tickets.</span>
            </header>
            <div className={cx('form-ticket')}>
                <div className={cx('form-header')}>
                    <span className={cx('header-title')}>Create New Ticket</span>
                    <span className={cx('header-sub-title')}>
                        Fill up all the information here, then click submit button.
                    </span>
                </div>
                <form className={cx('form')}>
                    <div className={cx('form-container')}>
                        <div className={cx('form-left')}>
                            <label className={cx('label')}>
                                Subject
                                <input className={cx('subject-ipt')} type="text" placeholder="Enter subject..." />
                            </label>
                            <label htmlFor="choose-img" className={cx('choose-img-btn')}>
                                <BsArrowBarUp />
                                Choose a photo
                                <input id="choose-img" type="file" hidden />
                            </label>
                            <div className={cx('preview')}>
                                {/* {previewSourcePhoto ? (
                                        <img className={cx('preview-img')} src={`${previewSourcePhoto}`} alt="img" />
                                    ) : null} */}
                                <span className={cx('upload-icon')}>
                                    <BsFillCloudArrowUpFill />
                                </span>
                                <span className={cx('text')}>No file chosen, yet!</span>
                                <span className={cx('close-img-btn')}>
                                    <FaTimes />
                                </span>
                            </div>
                        </div>
                        <label className={cx('label')}>
                            Content
                            <textarea className={cx('ticket-content')} placeholder="Write ticket content..." />
                        </label>
                    </div>
                    <button className={cx('submit-btn')}>Submit Ticket</button>
                </form>
            </div>

            <div className={cx('ticket-history-table')}>
                <div className={cx('table-header')}>
                    <div className={cx('header-left')}>
                        <span className={cx('table-title')}>Latest support history in 7 days</span>
                        <span className={cx('table-sub-title')}>Here is your most recent history.</span>
                    </div>
                    <div className={cx('header-right')}>
                        <span className={cx('export-btn')}>
                            <BsDownload />
                            Export
                        </span>
                    </div>
                </div>
                <div className={cx('table-container')}>
                    <div className={cx('table-head')}>
                        <span className={cx('rq-id')}>Ticket ID</span>
                        <span className={cx('rq-subject')}>Subject</span>
                        <span className={cx('rq-img')}>Image</span>
                        <span className={cx('rq-date-time')}>Date/Time</span>
                        <span className={cx('rq-status')}>Support Status</span>
                        <span className={cx('rq-detail')}>Detail</span>
                    </div>
                    {tableTicket.map((item) => (
                        <div key={item.id} className={cx('table-row')}>
                            <span className={cx('rq-id')}>{item.id}</span>
                            <span className={cx('rq-subject')}>{item.subject}</span>
                            <span className={cx('rq-img')}>
                                {item.image ? (
                                    <span className={cx('icon-check')}>
                                        <FaCheck />
                                    </span>
                                ) : null}
                            </span>
                            <div className={cx('rq-date-time')}>
                                <span className={cx('date')}>{item.date}</span>
                                <span className={cx('time')}>{item.time}</span>
                            </div>
                            <span className={cx('rq-status')}>{item.status}</span>
                            <div className={cx('rq-detail')}>
                                <span className={cx('detail-icon')} onClick={() => handleToggleSupportTicketInfo(item)}>
                                    <BsClipboardMinus />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SupportTicketInfo
                show={showSupportTicketInfoModal}
                setShowSupportTicketInfoModal={setShowSupportTicketInfoModal}
                ticket={supportTicket}
            />
        </div>
    );
}

export default Support;
