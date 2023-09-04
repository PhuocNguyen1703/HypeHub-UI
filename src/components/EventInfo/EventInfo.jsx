import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsClock, BsJustifyLeft, BsPencil, BsTrash, BsXLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import EditForm from '../EditForm/EditForm';

import styles from './EventInfo.module.scss';

const cx = classNames.bind(styles);

function EventInfo() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const [showEditForm, setShowEditForm] = useState(false);
    const [completed, setCompleted] = useState(selectedEvent.completed ? 'completed' : 'uncompleted');
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        // dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    const handleEdit = () => {
        setShowEditForm(true);
    };

    const handleCompleted = () => {
        setCompleted(completed === 'completed' ? 'uncompleted' : 'completed');
        console.log(completed);
    };

    if (showEditForm) {
        return <EditForm />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className={cx('wrapper')}
        >
            <header className={cx('header')}>
                <span className={cx('type')}>{selectedEvent.calendarType}</span>
                <div className={cx('header-action-btn')}>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Edit">
                            <button className={cx('edit-btn')} onClick={handleEdit}>
                                <BsPencil />
                            </button>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Delete">
                            <button className={cx('delete-btn')}>
                                <BsTrash />
                            </button>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Close">
                            <button className={cx('close-btn')} onClick={closeModal}>
                                <BsXLg />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('title')}>{selectedEvent.title}</p>
                <div className={cx('calendar')}>
                    <span className={cx('icon')}>
                        <BsClock />
                    </span>
                    <span>{selectedEvent.date}</span>
                </div>
                <div className={cx('note')}>
                    <span className={cx('icon')}>
                        <BsJustifyLeft />
                    </span>
                    <span>{selectedEvent.content}</span>
                </div>
            </div>
            <footer className={cx('footer')}>
                <button
                    className={cx('mark-btn', completed === 'uncompleted' ? 'uncompleted' : '')}
                    onClick={handleCompleted}
                >
                    Mark {completed}
                </button>
            </footer>
        </motion.div>
    );
}

export default EventInfo;
