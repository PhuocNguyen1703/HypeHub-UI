import React, { useState } from 'react';
import classNames from 'classnames/bind';
import CreateBoardModal from '~/components/Modal/CreateBoard/CreateBoardModal';

import styles from './Kanban.module.scss';
import { MODAL_ACTION_CLOSE } from '~/utils/constants';

const cx = classNames.bind(styles);

function Kanban() {
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    const boards = [
        {
            id: 'board-1',
            title: 'board-1 asd asd asd asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asdas asd as das asd asd ad as asd dad asd ad as asd asd asd',
            createdAt: '2022',
        },
        { id: 'board-2', title: 'board-2', createdAt: '2023' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-2', title: 'board-2', createdAt: '2023' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        {
            id: 'board-2',
            title: 'board-2 asd asd asd asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asdas asd as das asd asd ad as asd dad asd ad as asd asd asd ',
            createdAt: '2023',
        },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-2', title: 'board-2', createdAt: '2023' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        {
            id: 'board-1',
            title: 'board-1 asd asd asd asd asd asd asd asd asd asd asd ad asd asd asd asd asd asd asdas asd as das asd asd ad as asd dad asd ad as asd asd asd',
            createdAt: '2022',
        },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
    ];

    const toggleShowCreateBoardModal = () => {
        setShowCreateBoardModal((prevState) => !prevState);
    };

    const handleActionCreateBoardModal = (type) => {
        if (type === MODAL_ACTION_CLOSE) return toggleShowCreateBoardModal();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('add-board-btn')} onClick={toggleShowCreateBoardModal}>
                    Create board
                </button>
                <span className={cx('total-board')}>{boards.length} board</span>
            </div>
            <div className={cx('content')}>
                {boards.map((board, idx) => (
                    <div key={idx} className={cx('board')}>
                        <span className={cx('title')}>{board.title}</span>
                        <span className={cx('createdAt')}>{board.createdAt}</span>
                    </div>
                ))}
            </div>
            <CreateBoardModal show={showCreateBoardModal} onAction={handleActionCreateBoardModal} />
        </div>
    );
}

export default Kanban;
