import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SupportCenter.module.scss';
import { BsCaretLeftFill, BsCaretRightFill, BsClipboardMinus, BsDownload, BsFillCaretDownFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SupportCenter() {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const optionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // if (optionRef.current && !optionRef.current.contains(e.target)) {
        //     setIsOpenOption(false);
        // }
        setIsOpenOption(false);
    };

    const handleToggleOption = () => {
        setIsOpenOption(true);
    };

    const tableTicket = [
        {
            id: 'SR#135267859',
            subject: 'Support password',
            content: 'This is content',
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
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
            createdBy: 'Nguyen Thi Huyen Trang',
            image: 'asdasd',
            date: '20/01/2023',
            time: '10:00 am',
            status: 'In process',
            comment: '',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Support Center</span>
            </header>

            <div className={cx('ticket-table')}>
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
                        <span className={cx('rq-created-by')}>Created By</span>
                        <span className={cx('rq-img')}>Image</span>
                        <span className={cx('rq-date-time')}>Date/Time</span>
                        <span className={cx('rq-status')}>Status</span>
                        <span className={cx('rq-detail')}>Detail</span>
                    </div>
                    {tableTicket.map((item) => (
                        <div key={item.id} className={cx('table-row')}>
                            <span className={cx('rq-id')}>{item.id}</span>
                            <span className={cx('rq-subject')}>{item.subject}</span>
                            <span className={cx('rq-created-by')}>{item.createdBy}</span>
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
                                <span className={cx('detail-icon')}>
                                    <BsClipboardMinus />
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className={cx('pagination')}>
                        <div className={cx('per-page')}>
                            <div className={cx('select')}>
                                <span className={cx('selected')} onClick={handleToggleOption}>
                                    10
                                    <span className={cx('dropdown-icon')}>
                                        <BsFillCaretDownFill />
                                    </span>
                                </span>
                                <span className={cx('text-per-page')}>Entries per page</span>
                                {isOpenOption && (
                                    <ul ref={optionRef} className={cx('option')}>
                                        <li className={cx('select-option')}>10</li>
                                        <li className={cx('select-option')}>15</li>
                                        <li className={cx('select-option')}>20</li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className={cx('pagination-right')}>
                            <button className={cx('prev-btn')}>
                                <BsCaretLeftFill />
                            </button>
                            <div className={cx('page')}>
                                Page
                                <span className={cx('number')}>1</span>
                                of 12
                            </div>
                            <button className={cx('next-btn')}>
                                <BsCaretRightFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportCenter;
