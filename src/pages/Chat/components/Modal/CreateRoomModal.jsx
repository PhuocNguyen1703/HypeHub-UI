import classNames from 'classnames/bind';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BsCameraFill, BsChevronRight, BsXLg } from 'react-icons/bs';
import * as yup from 'yup';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import Icon from '~/components/Icon/Icon';
import Modal from '~/components/Modal/Modal';
import styles from './CreateRoomModal.module.scss';

const cx = classNames.bind(styles);

function CreateRoomModal({ isOpen, isHide, onAction }) {
  const [isCreateRoomForm, setIsCreateRoomForm] = useState(true);
  const [type, setType] = useState('');

  const formSchema = yup.object().shape({});

  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
  });

  const handleCloseModal = () => {
    isHide(!isOpen);
    reset();
  };

  const handleOnNextForm = (e) => {
    const getTypeValue = e.target.dataset.type;
    setIsCreateRoomForm(false);
    setType(getTypeValue);
  };

  const handleOnBack = () => {
    setIsCreateRoomForm(true);
    reset();
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type,
      id: 'asdqwe12asd',
      coverAvatar:
        'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    };
    onAction(newData);
    handleCloseModal();
  };

  if (isOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
              <CircleHeader wrapperClassName={cx('wrapperClassName')} />
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <BsXLg />
              </button>
            </header>
            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
              <span className={cx('title')}>{isCreateRoomForm ? 'Create a room' : 'Customize your room'}</span>
              <span className={cx('desc')}>
                {isCreateRoomForm
                  ? 'Your room is where you and your friends hang out. Make yours and start talking.'
                  : 'Give your new room a personality with a name and an icon. You can always change it later.'}
              </span>
              {isCreateRoomForm ? (
                <>
                  <button data-type="private" className={cx('private-btn')} onClick={(e) => handleOnNextForm(e)}>
                    <div className={cx('img')}></div>
                    Private Room
                    <Icon icon={<BsChevronRight />} className={cx('icon-next')} size="1.6rem" />
                  </button>
                  <button data-type="public" className={cx('public-btn')} onClick={(e) => handleOnNextForm(e)}>
                    <div className={cx('img')}></div>
                    Public Room
                    <Icon icon={<BsChevronRight />} className={cx('icon-next')} size="1.6rem" />
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor="choose-img" className={cx('choose-img-btn')}>
                    <Icon icon={<BsCameraFill />} size="2.8rem" />
                    Upload
                    <input id="choose-img" type="file" hidden />
                  </label>
                  <label className={cx('room-name')}>
                    Room name
                    <input className={cx('input')} defaultValue="User's room" {...register('roomName')} />
                  </label>
                  <div className={cx('action-btn')}>
                    <button type="button" className={cx('back-btn')} onClick={handleOnBack}>
                      Back
                    </button>
                    <button type="submit" className={cx('create-btn')}>
                      Create
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
}

export default CreateRoomModal;
