import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { BsTrash, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import EventForm from '../Modal/CreateCalendar/EventForm/EventForm';
import styles from './EditForm.module.scss';

const cx = classNames.bind(styles);

function EditForm() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        // dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className={cx('wrapper')}
        >
            <header className={cx('header')}>
                <div className={cx('header-action-btn')}>
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
                <EventForm />
            </div>
        </motion.div>
    );
}

export default EditForm;
