import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { BsTrash, BsJournalPlus, BsFileEarmarkPlus } from 'react-icons/bs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import TodoInfo from '~/components/Modal/TodoInfo';
import CreateNotebook from '~/components/Modal/CreateNotebook';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import CreateNote from '~/components/Modal/CreateNote';

const cx = classNames.bind(styles);

function Todo() {
    const [showCreateNotebookModal, setShowCreateNotebookModal] = useState(false);
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false);
    const [showTodoInfoModal, setShowTodoInfoModal] = useState(false);

    const note = { id: '123', content: '' };

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [rawHTML, setRawHTML] = useState(note.content);

    // const menu = [{ icon: <BsTrash />, title: 'Trash', path: '/deleted' }];

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

    useEffect(() => {}, [note.id]);

    const handleOnchangeEditor = (editorState) => {
        setEditorState(editorState);
        setRawHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    const handleCreateNotebook = () => {
        setShowCreateNotebookModal(true);
    };

    const handleCreateNote = () => {
        setShowCreateNoteModal(true);
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
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleOnchangeEditor}
                    placeholder="Write something"
                    wrapperClassName={cx('editor-wrapper')}
                    editorClassName={cx('editor-textarea')}
                    toolbarClassName={cx('editor-toolbar')}
                />
            </div>

            <CreateNotebook show={showCreateNotebookModal} setShowCreateNotebookModal={setShowCreateNotebookModal} />
            <CreateNote show={showCreateNoteModal} setShowCreateNoteModal={setShowCreateNoteModal} />
            {/* <TodoInfo show={showTodoInfoModal} setShowTodoInfoModal={setShowTodoInfoModal} /> */}
        </div>
    );
}

export default Todo;
