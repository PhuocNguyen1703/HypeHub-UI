import { BsXLg } from 'react-icons/bs';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './CreateCalendar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarEventModalIsOpen } from '~/redux/Slice/modalSlice';
import EventForm from './EventForm';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import dayjs from 'dayjs';
import Tippy from '@tippyjs/react';
import EventInfo from '~/components/EventInfo';

const cx = classNames.bind(styles);

function CreateCalendar() {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    if (selectedEvent) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ x: '-50%', y: '-50%', scale: 0 }}
                    animate={{ scale: 1 }}
                    className={cx('wrapper')}
                >
                    <EventInfo />
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <div>
                        <Tippy delay={[0, 50]} interactive content="Close">
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </Tippy>
                    </div>
                </header>
                <div className={cx('body')}>
                    <div className={cx('title')}>
                        <input className={cx('title-ipt')} type="text" name="title" required autoFocus />
                        <span className={cx('underline-title-ipt')}></span>
                        <label className={cx('label')}>Title</label>
                    </div>
                    {/* <TaskForm /> */}
                    <EventForm />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default CreateCalendar;
