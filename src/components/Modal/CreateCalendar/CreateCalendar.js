import { BsPencil, BsTrash, BsX, BsXLg } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './CreateCalendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import TaskForm from './TaskForm';
import EventForm from './EventForm';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import dayjs from 'dayjs';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import EventInfo from '~/components/EventInfo';

const cx = classNames.bind(styles);

function CreateCalendar() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const [type] = useState(selectedEvent ? selectedEvent.type : 'Event');
    const [title] = useState(selectedEvent ? selectedEvent.title : '');
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    return (
        <div>
            <EventInfo />
        </div>
        // <div className={cx('wrapper')}>
        //     <header className={cx('header')}>
        //         <span className={cx('type')}>{type}</span>
        //         <div className={cx('header-action-btn')}>
        //             {selectedEvent && (
        //                 <>
        //                     <span></span>
        //                     <Tippy delay={[0, 50]} interactive content="Edit">
        //                         <button className={cx('edit-btn')}>
        //                             <BsPencil />
        //                         </button>
        //                     </Tippy>
        //                     <Tippy delay={[0, 50]} interactive content="Delete">
        //                         <button className={cx('delete-btn')}>
        //                             <BsTrash />
        //                         </button>
        //                     </Tippy>
        //                 </>
        //             )}
        //             <Tippy delay={[0, 50]} interactive content="Close">
        //                 <button className={cx('close-btn')} onClick={closeModal}>
        //                     <BsXLg />
        //                 </button>
        //             </Tippy>
        //         </div>
        //     </header>
        //     <div className={cx('body')}>
        //         <div className={cx('title')}>
        //             <input
        //                 className={cx('title-ipt')}
        //                 type="text"
        //                 name="title"
        //                 defaultValue={title}
        //                 required
        //                 autoFocus
        //             />
        //             <span className={cx('underline-title-ipt')}></span>
        //             <label className={cx('label')}>Title</label>
        //         </div>
        //         {!selectedEvent && (
        //             <div className={cx('type-btn')}>
        //                 <button className={cx('event-btn')}>Event</button>
        //                 <button className={cx('task-btn')}>Task</button>
        //             </div>
        //         )}
        //         {/* <TaskForm /> */}
        //         {/* <EventForm /> */}
        //     </div>
        // </div>
    );
}

export default CreateCalendar;
