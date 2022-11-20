import React from 'react';
import classNames from 'classnames/bind';

import styles from './Sales.module.scss';
import {
    BsArrowDownShort,
    BsArrowUpShort,
    BsFillCreditCard2BackFill,
    BsFillPeopleFill,
    BsFillWalletFill,
    BsStack,
    BsThreeDots,
} from 'react-icons/bs';
import Piechart from '~/components/Chart/Pie';
import Linechart from '~/components/Chart/Line';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

function Sales() {
    const customerTableHead = ['no', 'id customers', 'customers name', 'items name', 'order date', 'status', 'price'];

    const customerList = [
        {
            no: 1,
            idCustomer: '#065499',
            customerAvatar:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Eren Yaeger',

            itemName: '1xBlack pack',
            orderDate: '21/07/2022 08:20',
            status: 'Paid',
            price: '$101',
        },
        {
            no: 2,
            idCustomer: '#065500',
            customerAvatar:
                'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Levi Ackerman',

            itemName: '2xAirpod Black',
            orderDate: '17/08/2022 18:17',
            status: 'Pending',
            price: '$149',
        },
        {
            no: 3,
            idCustomer: '#065501',
            customerAvatar:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Rainer Brown',

            itemName: '1xjackket',
            orderDate: '12/07/2022 14:20',
            status: 'Paid',
            price: '$99',
        },
        {
            no: 4,
            idCustomer: '#065502',
            customerAvatar:
                'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Victoria Secret',

            itemName: '2xTshort',
            orderDate: '19/10/2022 06:10',
            status: 'Overdue',
            price: '$506',
        },
        {
            no: 5,
            idCustomer: '#065503',
            customerAvatar:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Eren Yaeger',

            itemName: '1xGlasses',
            orderDate: '26/11/2022 20:15',
            status: 'Pending',
            price: '$302',
        },
        {
            no: 6,
            idCustomer: '#065504',
            customerAvatar:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Levi Ackerman',

            itemName: '1xBike',
            orderDate: '17/08/2022 18:17',
            status: 'Pending',
            price: '$149',
        },
        {
            no: 7,
            idCustomer: '#065505',
            customerAvatar:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Victoria Secret',

            itemName: '3xPhone',
            orderDate: '19/10/2022 06:10',
            status: 'Overdue',
            price: '$506',
        },
        {
            no: 8,
            idCustomer: '#065506',
            customerAvatar:
                'https://plus.unsplash.com/premium_photo-1661746536078-b7db9215519f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxpdGVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Eren Yaeger',

            itemName: '1xBlack pack',
            orderDate: '26/11/2022 20:15',
            status: 'Pending',
            price: '$999',
        },
        {
            no: 9,
            idCustomer: '#065507',
            customerAvatar:
                'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Eren Yaeger',

            itemName: '2xLaptop',
            orderDate: '26/11/2022 20:15',
            status: 'Pending',
            price: '$302',
        },
        {
            no: 10,
            idCustomer: '#065508',
            customerAvatar:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            customerName: 'Rainer Brown',
            itemName: '1xAirPod',
            orderDate: '12/07/2022 14:20',
            status: 'Paid',
            price: '$302',
        },
    ];

    const renderHead = (item, idx) => {
        return <th key={idx}>{item}</th>;
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.no}</td>
                <td>{item.idCustomer}</td>
                <td className={cx('customer-avatar')}>
                    <img className={cx('photo')} src={item.customerAvatar} alt="avatar" />
                    {item.customerName}
                </td>
                <td>{item.itemName}</td>
                <td>{item.orderDate}</td>
                <td>{item.status}</td>
                <td>{item.price}</td>
            </tr>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('customers')}>
                    <div className={cx('top')}>
                        <span className={cx('purple')}></span>
                        <div className={cx('content')}>
                            <span className={cx('title')}>Customers</span>
                            <span className={cx('value')}>1.456</span>
                        </div>
                        <span className={cx('icon-customer')}>
                            <BsFillPeopleFill />
                        </span>
                    </div>
                    <span className={cx('bottom')}>
                        <span className={cx('up')}>
                            <BsArrowUpShort />
                            +6.5%
                        </span>
                        Since last week
                    </span>
                </div>
                <div className={cx('revenue')}>
                    <div className={cx('top')}>
                        <span className={cx('blue')}></span>
                        <div className={cx('content')}>
                            <span className={cx('title')}>Revenue</span>
                            <span className={cx('value')}>$3.345</span>
                        </div>
                        <span className={cx('icon-revenue')}>
                            <BsFillCreditCard2BackFill />
                        </span>
                    </div>
                    <span className={cx('bottom')}>
                        <span className={cx('down')}>
                            <BsArrowDownShort />
                            -0.10%
                        </span>
                        Since last week
                    </span>
                </div>
                <div className={cx('profit')}>
                    <div className={cx('top')}>
                        <span className={cx('orange')}></span>
                        <div className={cx('content')}>
                            <span className={cx('title')}>Profit</span>
                            <span className={cx('value')}>60%</span>
                        </div>
                        <span className={cx('icon-profit')}>
                            <BsStack />
                        </span>
                    </div>
                    <span className={cx('bottom')}>
                        <span className={cx('down')}>
                            <BsArrowDownShort />
                            -0.2%
                        </span>
                        Since last week
                    </span>
                </div>
                <div className={cx('invoices')}>
                    <div className={cx('top')}>
                        <span className={cx('yellow')}></span>
                        <div className={cx('content')}>
                            <span className={cx('title')}>Invoices</span>
                            <span className={cx('value')}>1.135</span>
                        </div>
                        <span className={cx('icon-invoices')}>
                            <BsFillWalletFill />
                        </span>
                    </div>
                    <span className={cx('bottom')}>
                        <span className={cx('up')}>
                            <BsArrowUpShort />
                            +11.5%
                        </span>
                        Since last week
                    </span>
                </div>
            </header>

            <div className={cx('graph')}>
                <div className={cx('analytic')}>
                    <div className={cx('heading')}>
                        <span>Sales Analytics</span>
                        <button>
                            <BsThreeDots />
                        </button>
                    </div>
                    <div className={cx('line-chart')}>
                        <Linechart />
                    </div>
                </div>
                <div className={cx('statistic')}>
                    <div className={cx('heading')}>
                        <span>Invoice Statistics</span>
                        <button>
                            <BsThreeDots />
                        </button>
                    </div>
                    <div className={cx('pie-chart')}>
                        <Piechart />
                    </div>
                </div>
            </div>

            <div className={cx('table-data')}>
                <div className={cx('heading')}>
                    <span>Recent Invoices</span>
                    <button>
                        <BsThreeDots />
                    </button>
                </div>
                <Table
                    limit="5"
                    headData={customerTableHead}
                    renderHead={(item, idx) => renderHead(item, idx)}
                    bodyData={customerList}
                    renderBody={(item, idx) => renderBody(item, idx)}
                />
            </div>
        </div>
    );
}

export default Sales;
