import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaRegCircle } from 'react-icons/fa';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './Candidate.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

function Candidate() {
    const [subMenu, setSubMenu] = useState('Employee table');
    const menu = [
        {
            icon: '',
            title: 'Employee table',
            children: [
                { title: 'Overview' },
                { title: 'Payroll and Welfare' },
                { title: 'Tax and Insurance' },
                { title: 'Schedule and Furlough' },
                { title: 'Teams and Manager' },
                { title: 'Information' },
            ],
        },
        {
            icon: '',
            title: 'Structure',
            children: [
                { title: 'Overview 1' },
                { title: 'Payroll and Welfare 1' },
                { title: 'Tax and Insurance 1' },
                { title: 'Schedule and Furlough 1' },
                { title: 'Teams and Manager 1' },
                { title: 'Information 1' },
            ],
        },
        {
            icon: '',
            title: 'Extended Application',
            children: [
                { title: 'Overview 2' },
                { title: 'Payroll and Welfare 2' },
                { title: 'Tax and Insurance 2' },
                { title: 'Schedule and Furlough 2' },
                { title: 'Teams and Manager 2' },
                { title: 'Information 2' },
            ],
        },
    ];

    const data = [
        {
            id: 'MNV-00',
            name: 'Nguyễn Văn A',
            status: true,
            seniority: '2022-01-01',
            department: 'marketing',
            position: 'Sale',
            office: 'HCM',
        },
        {
            id: 'MNV-01',
            name: 'Nguyễn Văn A',
            status: false,
            seniority: '2020-03-08',
            department: 'marketing',
            position: 'Sale',
            office: 'HCM',
        },
        {
            id: 'MNV-02',
            name: 'Nguyễn Văn A',
            status: false,
            seniority: '2000-01-29',
            department: 'marketing',
            position: 'Sale',
            office: 'HCM',
        },
        {
            id: 'MNV-03',
            name: 'Nguyễn Văn A',
            status: true,
            seniority: '1996-03-17',
            department: 'marketing',
            position: 'Sale',
            office: 'HCM',
        },
        {
            id: 'MNV-04',
            name: 'Nguyễn Văn A',
            status: true,
            seniority: '2022-08-01',
            department: 'marketing',
            position: 'Sale',
            office: 'HCM',
        },
    ];

    const handleOnClick = (e) => {
        setSubMenu(e.target.name);
        console.log(e.target.name);
    };

    const renderTableHeader = () => {
        const header = ['ID', 'Name', 'Status', 'Seniority', 'Department', 'Position', 'Office'];
        return header.map((title, index) => <th key={index}>{title}</th>);
    };

    const formatTime = (time) => {
        const seniority = dayjs().diff(time, 'day');

        if (seniority >= 365) {
            const year = Math.floor(seniority / 365);
            const day = seniority - year * 365;

            return (
                <>
                    {year}
                    <span> year </span>
                    {day}
                    <span> day</span>
                </>
            );
        }
        return (
            <>
                {seniority}
                <span> day</span>
            </>
        );
    };

    const renderTableData = () => {
        return data.map((data, index) => (
            <tr key={index}>
                <td className={cx('id')}>{data.id}</td>
                <td className={cx('name')}>
                    <Image src="" alt="" className={cx('avatar')} />
                    <span>{data.name}</span>
                </td>
                <td className={cx('status', data.status === true ? 'active' : 'notActive')}>
                    <FaRegCircle className={cx('icon')} />
                </td>
                <td className={cx('seniority')}>{formatTime(data.seniority)}</td>
                <td>{data.department}</td>
                <td>{data.position}</td>
                <td>{data.office}</td>
            </tr>
        ));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <nav className={cx('menu')}>
                    {menu.map((btn, index) => {
                        return (
                            <button name={btn.title} key={index} onClick={handleOnClick}>
                                {btn.title}
                            </button>
                        );
                    })}
                </nav>

                <nav className={cx('sub-menu')}>
                    {menu.map(
                        (value) =>
                            value.title === subMenu &&
                            value.children.map((btn, index) => <button key={index}>{btn.title}</button>),
                    )}
                </nav>
            </div>

            <div>
                <table className={cx('employee-table')}>
                    <tbody>
                        <tr>{renderTableHeader()}</tr>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Candidate;
