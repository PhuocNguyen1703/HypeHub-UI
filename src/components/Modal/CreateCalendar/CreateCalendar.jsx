import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { BsXLg } from 'react-icons/bs';

import Tippy from '@tippyjs/react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import EventInfo from '~/components/EventInfo/EventInfo';
import { setDaySelected, setSelectedEvent } from '~/redux/Slice/calendarSlice';
import Modal from '../Modal';
import styles from './CreateCalendar.module.scss';
import EventForm from './EventForm/EventForm';

const cx = classNames.bind(styles);

function CreateCalendar({ show, setShowCreateCalendarModal }) {
    const { selectedEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setDaySelected(dayjs().format('MMM DD, YYYY')));
        // dispatch(setCalendarEventModalIsOpen(false));
        dispatch(setSelectedEvent(null));
        setShowCreateCalendarModal(false);
    };

    if (selectedEvent) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <EventInfo />
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }

    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
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
                            <EventForm />
                        </div>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateCalendar;
