import React from 'react';
import classNames from 'classnames/bind';

import styles from './NoteInTimeSheet.module.scss';
import { AnimatePresence } from 'framer-motion';
import Modal from '~/components/Modal/Modal';
import { motion } from 'framer-motion';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { BsCursor, BsXLg } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function NoteInTimeSheet({ show, setShowDetailModal }) {
    const formSchema = yup.object().shape({
        comment: yup.string().required('Card number is required.').max(100, 'Please enter at most 100 characters.'),
    });

    const {
        register,
        reset,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });

    const comments = [
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment: 'How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment: 'How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment: 'How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment:
                'How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment: 'How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment: 'How are toy today ?',
        },
        {
            avatar: 'https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'Victoria secret',
            comment:
                'How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?How are toy today ?',
        },
    ];

    const handleCloseModal = () => {
        setShowDetailModal(false);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    if (show) {
        return (
            <Modal>
                <AnimatePresence>
                    <motion.div
                        initial={{ x: '-50%', y: '-50%', scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cx('wrapper')}
                    >
                        <header className={cx('header')}>
                            <CircleHeader wrapperClassName={cx('wrapperClassName')} />
                            <span className={cx('title')}>Note</span>
                            <button className={cx('close-btn')} onClick={handleCloseModal}>
                                <BsXLg />
                            </button>
                        </header>
                        <div className={cx('comment-container')}>
                            {comments.map((comment, idx) => (
                                <div key={idx} className={cx('comment')}>
                                    <Image className={cx('avatar')} src={comment.avatar} alt="avatar" />
                                    <div className={cx('content')}>
                                        <span className={cx('user-name')}>{comment.name}</span>
                                        <span className={cx('text')}>{comment.comment}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('input-field')}>
                                <Image
                                    className={cx('avatar')}
                                    src="https://images.unsplash.com/photo-1688937335220-a47b1933a15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <input className={cx('input')} type="text" {...register('comment')} />
                                <button className={cx('send-btn')} type="submit">
                                    <BsCursor />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </Modal>
        );
    }
}

export default NoteInTimeSheet;
