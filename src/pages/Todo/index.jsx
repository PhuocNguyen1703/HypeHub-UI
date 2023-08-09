import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    BsClipboardMinus,
    BsFileEarmarkPlus,
    BsLayoutSidebar,
    BsPatchPlus,
    BsPlusCircleDotted,
    BsTrash,
} from 'react-icons/bs';

import styles from './Todo.module.scss';

import { AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '~/components/Modal/Confirm/ConfirmModal';
import CreateNote from '~/components/Modal/CreateNote/CreateNote';
import TaskDetail from '~/components/Modal/TaskDetail/TaskDetail';
import routes from '~/config/routes';
import { MODAL_ACTION_CONFIRM } from '~/utils/constants';

const cx = classNames.bind(styles);

function Todo() {
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showAddNewTask, setShowAddNewTask] = useState(false);
    const [taskSelected, setTaskSelected] = useState({});
    const [taskRemove, setTaskRemove] = useState({});
    const [showTaskDetailModal, setShowTaskDetailModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm();

    const notes = [
        { id: 'asdqwdasdwaqdasdw', title: 'noteBooks1noteBooks1' },
        { id: 'asdqwdasdqweasdqsdw', title: 'noteBooks1noteBooks2' },
        { id: 'asdqwdasdqwwaqdasdw', title: 'noteBooks1noteBooks3' },
        { id: 'asdqwaqdasdw', title: 'noteBooks1noteBooks4 1234' },
    ];

    const todos = [
        {
            id: 1456234,
            title: 'Morning',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            category: 'Personal',
            time: '10:10 AM',
            done: false,
        },
        {
            id: 22365252,
            title: 'Morning 1',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            category: 'Personal',
            time: '10:10 AM',
            done: false,
        },
        {
            id: 323424234,
            title: 'Morning 2',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1  ',
            category: 'Team',
            time: '10:10 AM',
            done: true,
        },
        {
            id: 42342423423,
            title: 'Morning 3',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            category: 'Team',
            time: '10:10 AM',
            done: false,
        },
        {
            id: 5234243234,
            title: 'Morning 4',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            category: 'Personal',
            time: '10:10 AM',
            done: false,
        },
        {
            id: 62342434,
            title: 'Morning 5',
            desc: 'todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 todo1 ',
            category: 'Team',
            time: '10:10 AM',
            done: true,
        },
    ];

    const [todoList, setTodoList] = useState(todos);

    const handleCreateNote = () => {
        setShowCreateNoteModal(true);
    };

    const handleSelectNote = (item) => {
        navigate({
            pathname: routes.todo,
            search: `?id=${item.id}`,
        });
    };

    const handleToggleSidebar = () => {
        setSidebarCollapsed((prevState) => !prevState);
    };

    const handleToggleAddNewTask = () => {
        setShowAddNewTask((prevState) => !prevState);
    };

    const handleToggleTaskDetailModal = (item) => {
        setTaskSelected(item);
        setShowTaskDetailModal(true);
    };

    const handleToggleConfirmModal = (item) => {
        setTaskRemove(item);
        setShowConfirmModal((prevState) => !prevState);
    };

    const handleConfirmModalAction = (type) => {
        //Remove task
        if (type === MODAL_ACTION_CONFIRM) {
            const newTodoList = [...todoList];
            const newList = newTodoList.filter((item) => item.id !== taskRemove.id);
            setTodoList(newList);
        }

        handleToggleConfirmModal();
    };

    const handleOnClickCheckBox = (idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx].done = !newTodoList[idx].done;

        setTodoList(newTodoList);
    };

    const onSubmit = async (data) => {
        setTodoList([...todoList, data]);
        reset();
        handleToggleAddNewTask();
    };

    return (
        <div className={cx('wrapper')}>
            <AnimatePresence>
                <motion.div
                    animate={{
                        width: sidebarCollapsed ? '0' : '300px',
                        transition: {
                            duration: 0.6,
                        },
                    }}
                    className={cx('sidebar')}
                >
                    <div className={cx('header')}>
                        <span className={cx('title')}>Notes</span>
                        <button className={cx('add-btn')} onClick={handleCreateNote}>
                            <BsFileEarmarkPlus />
                        </button>
                    </div>
                    <div className={cx('note-list')}>
                        {notes.map((item, idx) => (
                            <span key={idx} className={cx('note-title')} onClick={() => handleSelectNote(item)}>
                                {item.title}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className={cx('note')}>
                <header className={cx('header')}>
                    <span className={cx('title')}>This is title note</span>
                    <div className={cx('action-btn')}>
                        <button className={cx('layout-sidebar-btn')} onClick={handleToggleSidebar}>
                            <BsLayoutSidebar />
                        </button>
                        <button className={cx('add-btn')} onClick={handleToggleAddNewTask}>
                            <BsPatchPlus />
                        </button>
                        <button className={cx('delete-btn')}>
                            <BsTrash />
                        </button>
                    </div>
                </header>
                {showAddNewTask && (
                    <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={cx('add-todo-ipt')}
                            placeholder="Enter task title..."
                            {...register('title')}
                        />
                        <button type="submit" className={cx('icon-add-new-task')}>
                            <BsPlusCircleDotted />
                        </button>
                    </form>
                )}
                <div className={cx('todo-list')}>
                    {todoList.map((item, idx) => (
                        <div key={idx} className={cx('item', item?.done && 'done')}>
                            <div className={cx('action-btn')}>
                                <button className={cx('icon-board')} onClick={() => handleToggleTaskDetailModal(item)}>
                                    <BsClipboardMinus />
                                </button>
                                <button className={cx('icon-trash')} onClick={() => handleToggleConfirmModal(item)}>
                                    <BsTrash />
                                </button>
                            </div>
                            <span className={cx('border-left')}></span>
                            <div className={cx('item-container')}>
                                <label className={cx('checkbox')}>
                                    <input
                                        type="checkbox"
                                        className={cx('checkbox-ipt')}
                                        onChange={() => handleOnClickCheckBox(idx)}
                                        checked={item?.done}
                                    />
                                    <span className={cx('icon-check')}>
                                        <HiCheck />
                                    </span>
                                </label>
                                <div className={cx('info')}>
                                    <span className={cx('title')}>{item.title}</span>
                                    <span className={cx('desc')}>{item?.desc}</span>
                                    <div className={cx('info-footer')}>
                                        <span className={cx('category')}>{item?.category}</span>
                                        <span className={cx('time')}>{item?.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CreateNote show={showCreateNoteModal} setShowCreateNoteModal={setShowCreateNoteModal} />
            <TaskDetail
                show={showTaskDetailModal}
                setShowTaskDetailModal={setShowTaskDetailModal}
                item={taskSelected}
            />
            <ConfirmModal
                show={showConfirmModal}
                title={'Remove column'}
                content={`Are you sure you want to remove <strong></strong>.`}
                onAction={handleConfirmModalAction}
            />
        </div>
    );
}

export default Todo;
