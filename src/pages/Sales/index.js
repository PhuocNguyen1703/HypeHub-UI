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
import PieChart from '~/components/Chart/Pie';
import Piechart from '~/components/Chart/Pie';

const cx = classNames.bind(styles);

function Sales() {
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
                <div className={cx('statistic')}>
                    <div className={cx('heading')}>
                        <span>Invoice Statistics</span>
                        <button>
                            <BsThreeDots />
                        </button>
                    </div>
                    <div className={cx('pie-chart')}>
                        <Piechart/>
                    </div>
                </div>
                <div className={cx('analytic')}>
                    <div className={cx('heading')}>
                        <span>Sales Analytics</span>
                        <button>
                            <BsThreeDots />
                        </button>
                    </div>
                    <div className={cx('pie-chart')}></div>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Sales;
