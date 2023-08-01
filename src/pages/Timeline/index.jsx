import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Timeline.module.scss';
import { BsCheck, BsClock, BsLadder, BsPencil, BsPhone, BsPlus, BsThermometer } from 'react-icons/bs';
import CreateTimeline from '~/components/Modal/CreateTimeline/CreateTimeline';

const cx = classNames.bind(styles);

function Timeline() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);
    const timelineRef = useRef(null);

    const timelineList = [
        {
            id: 1,
            icon: <BsPencil />,
            title: 'Assigned as a director for Project The Chewing Gum Attack',
            createBy: 'John N. Ward',
            note: 'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.',
            time: '4:33 pm',
        },
        {
            id: 2,
            icon: <BsClock />,
            title: 'Quary about purchased soccer socks',
            createBy: 'Edward Hopper',
            note: 'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.',
            time: '6:30 pm',
        },
        {
            id: 3,
            icon: <BsPhone />,
            title: 'Designing the dungeon',
            createBy: 'John N. Ward',
            note: 'To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.',
            time: '8:32 pm',
        },
        {
            id: 4,
            icon: <BsThermometer />,
            title: 'How to take the headache out of Order',
            createBy: 'Edward Hopper',
            note: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
            time: '10:24 pm',
        },
        {
            id: 5,
            icon: <BsCheck />,
            title: 'Mandatory routine checkup',
            createBy: 'Eye before Thy Hospital',
            note: 'To get the bitter butter out and take the better butter into the bitter dough to make a bitter bread and broad donut, not the usual yellow butter, but the white butterless butter.',
            time: '11:13 pm',
        },
        {
            id: 6,
            icon: <BsLadder />,
            title: 'Designing the dungeon',
            createBy: 'John N. Ward',
            note: 'To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.',
            time: '8:32 pm',
        },
    ];

    const toggleShowDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    //handleClick out side
    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, [showDropdown]);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (showDropdown) {
            if (timelineRef.current && !timelineRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
    };

    const handleToggleCreateNewTimeline = () => {
        setShowCreateTimelineModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <span className={cx('heading')}>Timeline</span>
                    <div ref={timelineRef} className={cx('select-timeline')}>
                        <span className={cx('timeline-title')} onClick={toggleShowDropdown}>
                            Timeline select
                        </span>
                        {showDropdown && (
                            <div className={cx('option')}>
                                <span className={cx('item')}>Timeline 1</span>
                                <span className={cx('item')}>Timeline 2</span>
                                <span className={cx('item')}>Timeline 3</span>
                            </div>
                        )}
                    </div>
                </div>
                <button className={cx('create-new-timeline-btn')} onClick={handleToggleCreateNewTimeline}>
                    <BsPlus />
                    Create timeline
                </button>
            </header>
            <div className={cx('container')}>
                <div className={cx('timeline-list')}>
                    {timelineList.map((item) => (
                        <div key={item.id} className={cx('timeline')}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <div className={cx('content')}>
                                <div className={cx('detail')}>
                                    <span className={cx('title')}>{item.title}</span>
                                    <span className={cx('create-by')}>
                                        by <strong>{item.createBy}</strong>
                                    </span>
                                    <p className={cx('note')}>{item.note}</p>
                                </div>
                                <span className={cx('time')}>
                                    <BsClock />
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CreateTimeline show={showCreateTimelineModal} setShowCreateTimelineModal={setShowCreateTimelineModal} />
        </div>
    );
}

export default Timeline;
