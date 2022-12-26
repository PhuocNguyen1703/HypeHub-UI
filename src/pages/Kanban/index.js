import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import CreateBoardModal from '~/components/Modal/CreateBoard/CreateBoardModal';

import styles from './Kanban.module.scss';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '~/utils/constants';
import { createNewBoard, getAllBoard, updateBoard } from '~/api/kanbanApi';
import { useSelector } from 'react-redux';
import { BsPencil, BsTrash } from 'react-icons/bs';
import EditBoardModal from '~/components/Modal/EditBoard/EditBoard';
import ConfirmModal from '~/components/Modal/Confirm/ConfirmModal';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);

function Kanban() {
    const userId = useSelector((state) => state.auth.login.currentUser._id);
    const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
    const [showEditBoardModal, setShowEditBoardModal] = useState(false);
    const [editBoard, setEditBoard] = useState({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [removeBoard, setRemoveBoard] = useState({});
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
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

    useEffect(() => {
        // getAllBoard(userId).then((boards) => {
        //     setBoards(boards);
        // });
        setBoards(boardList);
    }, []);

    const toggleShowCreateBoardModal = () => {
        setShowCreateBoardModal((prevState) => !prevState);
    };

    const handleActionCreateBoardModal = (type, data) => {
        if (type === MODAL_ACTION_CLOSE) return toggleShowCreateBoardModal();

        if (type === MODAL_ACTION_CONFIRM) {
            const newBoard = {
                ...data,
                userId: userId,
            };
            createNewBoard(newBoard).then((board) => {
                let newBoards = [...boards];
                newBoards.push(board);

                setBoards(newBoards);
            });
        }
    };

    const handleChoseBoard = (boardId) => {
        navigate(`${location.pathname}/board/${boardId}`);
    };

    const toggleShowEditBoardModal = (board) => {
        setEditBoard(board);
        setShowEditBoardModal((prevState) => !prevState);
    };

    const handleActionEditBoardModal = (type, data, board) => {
        if (type === MODAL_ACTION_CONFIRM) {
            let newBoards = [...boards];
            if (board.title !== data.title) {
                const newBoard = { ...board, title: data.title };
                updateBoard(newBoard._id, newBoard).then((updatedBoard) => {
                    const boardIdxToUpdate = newBoards.findIndex((i) => i._id === updatedBoard._id);

                    newBoards.splice(boardIdxToUpdate, 1, updatedBoard);
                    setBoards(newBoards);
                });
            }
        }

        toggleShowEditBoardModal();
    };

    const toggleShowConfirmModal = (board) => {
        setRemoveBoard(board);
        setShowConfirmModal((prevState) => !prevState);
    };

    const handleConfirmModalAction = (type, board) => {
        if (type === MODAL_ACTION_CONFIRM) {
            let newBoards = [...boards];
            const removeBoard = { ...board, _destroy: true };
            updateBoard(board._id, removeBoard).then((removedBoard) => {
                const boardIdxToRemove = newBoards.findIndex((i) => i._id === removedBoard._id);

                newBoards.splice(boardIdxToRemove, 1);
                setBoards(newBoards);
            });
        }

        toggleShowConfirmModal();
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
                        <span className={cx('title')} onClick={() => handleChoseBoard(board._id)}>
                            {board.title}
                        </span>
                        <div className={cx('bottom')}>
                            <span className={cx('createdAt')}>{dayjs(board.createdAt).format('DD/MM/YYYY')}</span>
                            <div className={cx('action-btn')}>
                                <button className={cx('edit-btn')} onClick={() => toggleShowEditBoardModal(board)}>
                                    <BsPencil />
                                </button>
                                <button className={cx('delete-btn')} onClick={() => toggleShowConfirmModal(board)}>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CreateBoardModal show={showCreateBoardModal} onAction={handleActionCreateBoardModal} />
            <EditBoardModal show={showEditBoardModal} board={editBoard} onAction={handleActionEditBoardModal} />
            <ConfirmModal
                show={showConfirmModal}
                board={removeBoard}
                title={'Remove board'}
                content={`Are you sure you want to remove board !`}
                onAction={handleConfirmModalAction}
            />
        </div>
    );
}

export default Kanban;
