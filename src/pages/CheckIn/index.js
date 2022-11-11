import React from 'react';
import classNames from 'classnames/bind';

import styles from './CheckIn.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

function CheckIn() {
    const customerTableHead = ['date', 'name', 'check in', 'check out', 'total hrs', 'overtime hrs', 'status'];

    const customerList = [
        {
            date: '2022/11/10',
            name: 'victoria',
            checkIn: '2022/11/12',
            checkOut: '2022/11/12',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            checkIn: '2022/11/12',
            checkOut: '2022/11/12',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            checkIn: '2022/11/12',
            checkOut: '2022/11/12',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            checkIn: '2022/11/12',
            checkOut: '2022/11/12',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            date: '2022/11/10',
            name: 'victoria',
            checkIn: '2022/11/12',
            checkOut: '2022/11/12',
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
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>{item.totalHrs}</td>
                <td>{item.overtimeHrs}</td>
                <td>{item.status}</td>
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

export default CheckIn;
