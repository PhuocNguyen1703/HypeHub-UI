import React from 'react';
import classNames from 'classnames/bind';
import { RiFilterLine, RiSearchLine, RiMore2Fill } from 'react-icons/ri';
import { MdOutlineFileDownload } from 'react-icons/md';
import { BsPrinter } from 'react-icons/bs';

import styles from './EmployeeHeader.module.scss';

const cx = classNames.bind(styles);

function EmployeeHeader({ totalUsers }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <span className={cx('title')}>{totalUsers} Employees</span>
                <button className={cx('filter')}>
                    <RiFilterLine />
                    Filter
                </button>
            </div>
            <div className={cx('header-right')}>
                <span className={cx('search')}>
                    <RiSearchLine />
                </span>
                <span className={cx('download')}>
                    <MdOutlineFileDownload />
                </span>
                <span className={cx('printer')}>
                    <BsPrinter />
                </span>
                <button className={cx('add-employee')}>Add Employee</button>
                <span className={cx('menu')}>
                    <RiMore2Fill />
                </span>
            </div>
        </div>
    );
}

export default EmployeeHeader;
