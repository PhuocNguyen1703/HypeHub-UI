import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table({ limit, bodyData, headData, renderHead, renderBody }) {
    const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);
    let pages = 1;
    let range = [];

    if (limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(limit));
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }

    const [currentPage, setCurrentPage] = useState(0);

    const selectPage = (page) => {
        const start = Number(limit) * page;
        const end = start + Number(limit);

        setDataShow(bodyData.slice(start, end));
        setCurrentPage(page);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <table>
                    {headData && renderHead ? (
                        <thead>
                            <tr>{headData.map((item, idx) => renderHead(item, idx))}</tr>
                        </thead>
                    ) : null}

                    {bodyData && renderBody ? (
                        <tbody>{dataShow.map((item, index) => renderBody(item, index))}</tbody>
                    ) : null}
                </table>
            </div>
            {pages > 1 ? (
                <div className={cx('pagination')}>
                    {range.map((item, idx) => (
                        <div
                            key={idx}
                            className={cx('item', currentPage === idx && 'active')}
                            onClick={() => selectPage(idx)}
                        >
                            {item + 1}
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
}

export default Table;
