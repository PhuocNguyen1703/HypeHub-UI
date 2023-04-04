import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import {
    BsTrash,
    BsJournalPlus,
    BsFileEarmarkPlus,
    BsPencil,
    BsPatchPlus,
    BsPlusCircleDotted,
    BsJournalText,
} from 'react-icons/bs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import TodoInfo from '~/components/Modal/TodoInfo';
import CreateNotebook from '~/components/Modal/CreateNotebook';

import CreateNote from '~/components/Modal/CreateNote';
import TaskDetail from '~/components/Modal/TaskDetail';
import { HiCheck } from 'react-icons/hi';

const cx = classNames.bind(styles);

function Todo() {
    const [showCreateNotebookModal, setShowCreateNotebookModal] = useState(false);
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);
    const [showAddNewTodo, setShowAddNewTodo] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [showTaskDetailModal, setShowTaskDetailModal] = useState(false);

    const notebooks = [
        { title: 'noteBooks1noteBooks1' },
        { title: 'noteBooks1noteBooks2' },
        { title: 'noteBooks1noteBooks3' },
        { title: 'noteBooks1noteBooks4 1234' },
    ];

    const notes = [
        { title: 'noteBooks1noteBooks1' },
        { title: 'noteBooks1noteBooks2' },
        { title: 'noteBooks1noteBooks3' },
        { title: 'noteBooks1noteBooks4 1234' },
    ];

    const todos = [
        {
            id: 1,
            content:
                'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            done: false,
        },
        { id: 2, content: 'todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 3, content: 'todo3 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: true },
        { id: 4, content: 'todo4 todo2 todo2 todo2 todo2', done: false },
        { id: 5, content: 'todo5 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 6, content: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ', done: true },
        { id: 7, content: 'todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 8, content: 'todo3 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: true },
        { id: 9, content: 'todo4 todo2 todo2 todo2 todo2', done: false },
        { id: 10, content: 'todo5 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 11, content: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ', done: true },
        { id: 12, content: 'todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 13, content: 'todo3 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 14, content: 'todo4 todo2 todo2 todo2 todo2', done: false },
        { id: 15, content: 'todo5 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 16, content: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ', done: false },
        { id: 17, content: 'todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 18, content: 'todo3 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: false },
        { id: 19, content: 'todo4 todo2 todo2 todo2 todo2', done: false },
        { id: 20, content: 'todo5 todo2 todo2 todo2 todo2 todo2 todo2 todo2', done: true },
    ];

    const [todoList, setTodoList] = useState(todos);

    const handleCreateNotebook = () => {
        setShowCreateNotebookModal(true);
    };

    const handleCreateNote = () => {
        setShowCreateNoteModal(true);
    };

    const handleAddNewTodo = () => {
        setShowAddNewTodo((prevState) => !prevState);
    };

    const handleToggleTodoDetail = () => {
        setShowTaskDetailModal(true);
    };

    const handleOnClickCheckBox = (idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx].done = !newTodoList[idx].done;
        setTodoList(newTodoList);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('notebook')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>Notebooks</span>
                    <div className={cx('action-btn')}>
                        <button className={cx('add-btn')} onClick={handleCreateNotebook}>
                            <BsJournalPlus />
                        </button>
                    </div>
                </div>
                <div className={cx('notebook-items')}>
                    {notebooks.map((item, idx) => (
                        <span key={idx} className={cx('item')}>
                            {item.title}
                        </span>
                    ))}
                </div>
            </div>
            <div className={cx('note')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>Notes</span>
                    <div className={cx('action-btn')}>
                        <button className={cx('add-btn')} onClick={handleCreateNote}>
                            <BsFileEarmarkPlus />
                        </button>
                    </div>
                </div>
                <div className={cx('note-items')}>
                    {notes.map((item, idx) => (
                        <span key={idx} className={cx('item')}>
                            {item.title}
                        </span>
                    ))}
                </div>
            </div>
            <div className={cx('note-content')}>
                <header className={cx('header')}>
                    <span className={cx('title')}>This is title note</span>
                    <div className={cx('action-btn')}>
                        <button className={cx('add-btn')} onClick={handleAddNewTodo}>
                            <BsPatchPlus />
                        </button>
                        <button className={cx('delete-btn')}>
                            <BsTrash />
                        </button>
                    </div>
                </header>
                {showAddNewTodo && (
                    <div className={cx('add-todo')}>
                        <label className={cx('label')}>
                            <BsPlusCircleDotted />
                            <input className={cx('add-todo-ipt')} />
                        </label>
                    </div>
                )}
                <div className={cx('content')}>
                    {todoList.map((item, idx) => (
                        <div key={item.id} className={cx('todo')}>
                            <label className={cx('checkbox-container')}>
                                <input
                                    type="checkbox"
                                    className={cx('checkbox-ipt')}
                                    checked={item.done}
                                    onClick={() => handleOnClickCheckBox(idx)}
                                    readOnly
                                />
                                <span className={cx('icon-check')}>
                                    <HiCheck />
                                </span>
                            </label>
                            <span className={cx('todo-content', item.done && 'completed')}>{item.content}</span>
                            <div className={cx('todo-action-btn')}>
                                <span className={cx('todo-detail-btn')} onClick={handleToggleTodoDetail}>
                                    <BsJournalText />
                                </span>
                                <span className={cx('remove-todo-btn')}>
                                    <BsTrash />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CreateNotebook show={showCreateNotebookModal} setShowCreateNotebookModal={setShowCreateNotebookModal} />
            <CreateNote show={showCreateNoteModal} setShowCreateNoteModal={setShowCreateNoteModal} />
            <TaskDetail show={showTaskDetailModal} setShowTaskDetailModal={setShowTaskDetailModal} />
        </div>
    );
}

export default Todo;
