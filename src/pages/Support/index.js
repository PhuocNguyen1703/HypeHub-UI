import React from 'react';
import classNames from 'classnames/bind';

import styles from './Support.module.scss';
import { BsArrowBarUp, BsClipboardMinus, BsDownload, BsFillCloudArrowUpFill } from 'react-icons/bs';
import { FaCheck, FaTimes } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Support() {
    const tableTicket = [
        { id: 'SR#135267859', subject: 'Support password', image: 'asdadad', date: '20/01/2023', status: 'Inprocess' },
        {
            id: 'SR#135216859',
            subject: 'Support password',
            image: 'sasd',
            date: '20/01/2023',
            status: 'Inprocess',
        },
        { id: 'SR#765267859', subject: 'Support password', image: '', date: '20/01/2023', status: 'Inprocess' },
        { id: 'SR#135107859', subject: 'Support password', image: '', date: '20/01/2023', status: 'Inprocess' },
        { id: 'SR#135224859', subject: 'Support password', image: 'dasdad', date: '20/01/2023', status: 'Inprocess' },
        { id: 'SR#135767859', subject: 'Support password', image: '', date: '20/01/2023', status: 'Inprocess' },
        { id: 'SR#130867859', subject: 'Support password', image: 'asdasd', date: '20/01/2023', status: 'Inprocess' },
    ];

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
                        <span className={cx('rq-id')}>Support ID</span>
                        <span className={cx('rq-subject')}>Subject</span>
                        <span className={cx('rq-img')}>Image</span>
                        <span className={cx('rq-date')}>Date</span>
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
                            <span className={cx('rq-date')}>{item.date}</span>
                            <span className={cx('rq-status')}>{item.status}</span>
                            <span className={cx('rq-detail')}>
                                <span className={cx('detail-icon')}>
                                    <BsClipboardMinus />
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Support;
