import React from 'react';
import classNames from 'classnames/bind';

import styles from './Timesheets.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

function Timesheets() {
    const customerTableHead = [
        'Date',
        'Name',
        'Email',
        'Time In',
        'Time Out',
        'Total Hrs',
        'Overtime Hrs',
        'Status',
        'Action',
    ];

    const customerList = [
        {
            date: '2022/11/10',
            name: 'victoria',
            email: 'admin@gmail.com',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            email: 'admin@gmail.com',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            email: 'admin@gmail.com',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            email: 'admin@gmail.com',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            email: 'admin@gmail.com',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
    ];

    const renderHead = (item, idx) => {
        return <th key={idx}>{item}</th>;
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.timeIn}</td>
                <td>{item.timeOut}</td>
                <td>{item.totalHrs}</td>
                <td>{item.overtimeHrs}</td>
                <td>{item.status}</td>
                <td></td>
            </tr>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, idx) => renderHead(item, idx)}
                bodyData={customerList}
                renderBody={(item, idx) => renderBody(item, idx)}
            />
        </div>
    );
}

export default Timesheets;
