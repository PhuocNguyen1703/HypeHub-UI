import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SupportCenter.module.scss';
import {
    BsCaretLeftFill,
    BsCaretRightFill,
    BsClipboardMinus,
    BsDownload,
    BsFillCaretDownFill,
    BsTrash,
} from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import ConfirmSupportTicket from '~/components/Modal/ConfirmSupportTicket';
import Table from '~/components/Table/Table';

const cx = classNames.bind(styles);

function SupportCenter() {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [showConfirmTicketModal, setShowConfirmTicketModal] = useState(false);
    const [ticket, setTicket] = useState({});
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

    const ticketData = [
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

    const ticketTableHead = ['', 'ticket ID', 'subject', 'created By', 'image', 'date/Time', 'status', 'action'];

    const renderHead = (item, idx) => {
        return (
            <th key={idx} className={cx(setHeadTitleCenter(item))}>
                <span className={cx('head-title')}>{item}</span>
            </th>
        );
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td className={cx('new-tag-field')}>
                    <span className={cx('tag-new')}>New</span>
                </td>
                <td>{item.id}</td>
                <td>{item.subject}</td>
                <td className={cx('name-field')}>{item.createdBy}</td>
                <td>{checkImage(item.image)}</td>
                <td>{item.date}</td>
                <td className={cx('status-field')}>{item.status}</td>
                <td>
                    <div className={cx('action-field')}>
                        <button className={cx('icon-detail')}>
                            <BsClipboardMinus />
                        </button>
                        <button className={cx('icon-remove')}>
                            <BsTrash />
                        </button>
                    </div>
                </td>
            </tr>
        );
    };

    const setHeadTitleCenter = (headTitle) => {
        if (headTitle === 'image' || headTitle === 'status' || headTitle === 'action') return 'text-center';
    };

    const checkImage = (image) => {
        if (image)
            return (
                <span className={cx('icon-check')}>
                    <FaCheck />
                </span>
            );
    };

    const handleToggleConfirmTicketModal = (item) => {
        setShowConfirmTicketModal(true);
        setTicket(item);
    };

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
                    <Table
                        limit={10}
                        headData={ticketTableHead}
                        renderHead={renderHead}
                        bodyData={ticketData}
                        renderBody={renderBody}
                    />
                </div>
            </div>

            <ConfirmSupportTicket
                show={showConfirmTicketModal}
                setShowConfirmTicketModal={setShowConfirmTicketModal}
                ticket={ticket}
            />
        </div>
    );
}

export default SupportCenter;
