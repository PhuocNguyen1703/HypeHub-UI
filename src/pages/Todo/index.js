import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { BsTrash, BsJournalPlus, BsFileEarmarkPlus, BsPencil } from 'react-icons/bs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import TodoInfo from '~/components/Modal/TodoInfo';
import CreateNotebook from '~/components/Modal/CreateNotebook';

import CreateNote from '~/components/Modal/CreateNote';
import NoteInfo from '~/components/Modal/NoteInfo';

const cx = classNames.bind(styles);

function Todo() {
    const [showCreateNotebookModal, setShowCreateNotebookModal] = useState(false);
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);
    const [showNoteInfoModal, setShowNoteInfoModal] = useState(false);

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

    const handleCreateNotebook = () => {
        setShowCreateNotebookModal(true);
    };

    const handleCreateNote = () => {
        setShowCreateNoteModal(true);
    };

    const handleEditNote = () => {
        setShowNoteInfoModal(true);
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
                        <button className={cx('edit-btn')} onClick={handleEditNote}>
                            <BsPencil />
                        </button>
                        <button className={cx('delete-btn')}>
                            <BsTrash />
                        </button>
                    </div>
                </header>
                <div className={cx('content')}></div>
            </div>

            <CreateNotebook show={showCreateNotebookModal} setShowCreateNotebookModal={setShowCreateNotebookModal} />
            <CreateNote show={showCreateNoteModal} setShowCreateNoteModal={setShowCreateNoteModal} />
            <NoteInfo show={showNoteInfoModal} setShowNoteInfoModal={setShowNoteInfoModal} />
        </div>
    );
}

export default Todo;
