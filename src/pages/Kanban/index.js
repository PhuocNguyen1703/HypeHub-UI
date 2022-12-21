import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import CreateBoardModal from '~/components/Modal/CreateBoard/CreateBoardModal';

import styles from './Kanban.module.scss';
import { MODAL_ACTION_CLOSE } from '~/utils/constants';
import { getAllBoard } from '~/api/kanbanApi';
import { useSelector } from 'react-redux';
import { BsPencil, BsTrash } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Kanban() {
    const userId = useSelector((state) => state.auth.login.currentUser._id);
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    const [boards, setBoards] = useState([]);
    const boardList = [
        {
            id: 'board-1',
            title: 'board-1 asd asd asd asd asd asd asd asd asd asd as',
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
            title: 'board-2 asd  as das asd asd ad as asd dad asd ad as asd asd asd ',
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
            title: 'board-1 asd asd asd asd asd asd asd asd asd asd asd ad asd a ',
            createdAt: '2022',
        },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
        { id: 'board-1', title: 'board-1', createdAt: '2022' },
    ];

    // useEffect(() => {
    //     getAllBoard(userId).then((boards) => {
    //         setBoards(boards);
    //     });
    // }, []);

    const toggleShowCreateBoardModal = () => {
        setShowCreateBoardModal((prevState) => !prevState);
    };

    const handleActionCreateBoardModal = (type) => {
        if (type === MODAL_ACTION_CLOSE) return toggleShowCreateBoardModal();
    };

    const handleEditBoard = () => {};

    const handleRemoveBoard = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('add-board-btn')} onClick={toggleShowCreateBoardModal}>
                    Create board
                </button>
                <span className={cx('total-board')}>{boardList.length} board</span>
            </div>
            <div className={cx('content')}>
                {boardList.map((board, idx) => (
                    <div key={idx} className={cx('board')}>
                        <span className={cx('title')}>{board.title}</span>
                        <div className={cx('bottom')}>
                            <span className={cx('createdAt')}>{board.createdAt}</span>
                            <div className={cx('action-btn')}>
                                <button className={cx('edit-btn')} onClick={handleEditBoard}>
                                    <BsPencil />
                                </button>
                                <button className={cx('delete-btn')} onClick={handleRemoveBoard}>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CreateBoardModal show={showCreateBoardModal} onAction={handleActionCreateBoardModal} />
        </div>
    );
}

export default Kanban;
