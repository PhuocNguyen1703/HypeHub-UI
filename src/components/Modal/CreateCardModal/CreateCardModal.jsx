import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './CreateCardModal.module.scss';
import {
    BsArrowBarUp,
    BsBookmarks,
    BsCardImage,
    BsFillCloudArrowUpFill,
    BsJustifyLeft,
    BsPalette,
    BsXLg,
} from 'react-icons/bs';
import { setCreateKanbanItemModalIsOpen } from '~/redux/Slice/modalSlice';
import { useDispatch } from 'react-redux';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import DatePicker from '~/components/DatePicker';
import { setSelectedItem } from '~/redux/Slice/kanbanSlice';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import { MODAL_ACTION_CLOSE } from '~/utils/constants';
import HTMLReactParser from 'html-react-parser';
import { createNewCard } from '~/services/kanbanApi';
import { cloneDeep } from 'lodash-es';
import { uploadImages } from '~/services/uploadImagesApi';

const cx = classNames.bind(styles);

function CreateKanbanItem({ show, title, subTitle, column, onUpdateColumnState, onAction }) {
    const { createKanbanItemModalIsOpen } = useSelector((state) => state.modal);
    const { selectedItem } = useSelector((state) => state.kanban);
    const [showColorList, setShowColorList] = useState(false);
    const [color, setColor] = useState();
    const [previewSourcePhoto, setPreviewSourcePhoto] = useState('');
    const dispatch = useDispatch();
    const colorRef = useRef(null);
    const { register, reset, handleSubmit } = useForm();

    const colorData = [
        { id: 'default', background: 'default-color', class: 'theme-color-default' },
        { id: 'radicchio', background: 'radicchio-color', class: 'theme-color-radicchio' },
        { id: 'citron', background: 'citron-color', class: 'theme-color-citron' },
        { id: 'basil', background: 'basil-color', class: 'theme-color-basil' },
        { id: 'blueBerry', background: 'blueBerry-color', class: 'theme-color-blueBerry' },
        { id: 'grape', background: 'grape-color', class: 'theme-color-grape' },
        { id: 'avocado', background: 'avocado-color', class: 'theme-color-avocado' },
        { id: 'eucalyptus', background: 'eucalyptus-color', class: 'theme-color-eucalyptus' },
        { id: 'lavender', background: 'lavender-color', class: 'theme-color-lavender' },
        { id: 'cocoa', background: 'cocoa-color', class: 'theme-color-cocoa' },
        { id: 'mango', background: 'mango-color', class: 'theme-color-mango' },
        { id: 'pistachio', background: 'pistachio-color', class: 'theme-color-pistachio' },
        { id: 'peacock', background: 'peacock-color', class: 'theme-color-peacock' },
        { id: 'wisteria', background: 'wisteria-color', class: 'theme-color-wisteria' },
        { id: 'graphite', background: 'graphite-color', class: 'theme-color-graphite' },
        { id: 'flamingo', background: 'flamingo-color', class: 'theme-color-flamingo' },
        { id: 'banana', background: 'banana-color', class: 'theme-color-banana' },
        { id: 'sage', background: 'sage-color', class: 'theme-color-sage' },
        { id: 'cobalt', background: 'cobalt-color', class: 'theme-color-cobalt' },
        { id: 'amethyst', background: 'amethyst-color', class: 'theme-color-amethyst' },
        { id: 'birch', background: 'birch-color', class: 'theme-color-birch' },
        { id: 'cyan', background: 'cyan-color', class: 'theme-color-cyan' },
        { id: 'orange', background: 'orange-color', class: 'theme-color-orange' },
        { id: 'lemon', background: 'lemon-color', class: 'theme-color-lemon' },
        { id: 'lime', background: 'lime-color', class: 'theme-color-lime' },
        { id: 'seafoam', background: 'seafoam-color', class: 'theme-color-seafoam' },
        { id: 'teal', background: 'teal-color', class: 'theme-color-teal' },
    ];
    //handleClick out side
    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, [showColorList]);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (showColorList) {
            if (colorRef.current && !colorRef.current.contains(e.target)) {
                setShowColorList(false);
            }
        }
    };

    const handleCloseModal = () => {
        setPreviewSourcePhoto('');
        reset();
        onAction(MODAL_ACTION_CLOSE);
    };

    const handleShowColorList = () => {
        setShowColorList((prevState) => !prevState);
    };

    const handleSelectColor = (item) => {
        setColor(item);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        previewFileUpload(file);
    };

    const previewFileUpload = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSourcePhoto(reader.result);
        };
        reader.onerror = () => {
            console.error('something went wrong!');
        };
    };

    const handleCancel = () => {
        handleCloseModal();
    };

    const onSubmit = async (data) => {
        // let coverUrl = '';
        // if (previewSourcePhoto) {
        //     //previewSourcePhoto encoded base64
        // coverUrl = await uploadImages(previewSourcePhoto);
        // }
        // const coverUrl = await uploadImages(previewSourcePhoto);

        const newCard = {
            ...data,
            columnId: column._id,
            boardId: column.boardId,
            tagColor: color?.background ? color?.background : 'default-color',
            cover: previewSourcePhoto,
        };

        createNewCard(newCard).then((card) => {
            console.log(card);
            let newColumn = cloneDeep(column);
            newColumn.cards.push(card);
            newColumn.cardOrder.push(card._id);

            onUpdateColumnState(newColumn);
            handleCloseModal();
        });

        // try {
        //     const task = await createTask(data);
        //     const newSections = [...sections];
        //     const index = newSections.findIndex((e) => e.sectionId === selectedItem.sectionId);
        //     newSections[index].tasks.unshift(task);
        //     console.log(newSections);
        // } catch (err) {
        //     alert(err);
        // }
    };

    if (show) {
        return (
            <AnimatePresence>
                <Modal>
                    <motion.div animate={{ width: show ? '400px' : '0' }} className={cx('wrapper')}>
                        <header className={cx('header')}>
                            <span className={cx('heading')}>
                                <span>{title}</span>
                                <button className={cx('close-btn')} onClick={handleCloseModal}>
                                    <BsXLg />
                                </button>
                            </span>
                            <p className={cx('desc')}>{HTMLReactParser(subTitle)}</p>
                        </header>
                        <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx('title')}>
                                <input
                                    className={cx('title-ipt')}
                                    type="text"
                                    name="title"
                                    required
                                    autoFocus
                                    {...register('title', { required: true })}
                                />
                                <span className={cx('underline-title-ipt')}></span>
                                <label className={cx('title-label')}>Title</label>
                            </div>
                            <div className={cx('label')}>
                                <span className={cx('label-icon')}>
                                    <BsBookmarks />
                                </span>
                                <div className={cx('label-input')}>
                                    <input
                                        className={cx('input')}
                                        type="text"
                                        name="label"
                                        placeholder="Enter label......"
                                        {...register('label')}
                                    />
                                </div>
                            </div>
                            <div className={cx('label-color')}>
                                <span className={cx('color-icon')}>
                                    <BsPalette />
                                </span>
                                <div className={cx('color')} onClick={handleShowColorList}>
                                    <div className={cx('color-select')}>
                                        <span
                                            className={cx(
                                                'color-selected',
                                                `${color ? `${color.background}` : 'default-color'}`,
                                            )}
                                        ></span>
                                        <span className={cx('color-name')}>
                                            {color ? color.id.charAt(0).toUpperCase() + color.id.slice(1) : 'Default'}
                                        </span>
                                        <span className={cx('down-icon')}>
                                            <FaChevronDown />
                                        </span>
                                    </div>
                                    {showColorList && (
                                        <ul ref={colorRef} className={cx('color-list')}>
                                            {colorData.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className={cx('color-item', `${item.background}`)}
                                                    onClick={() => handleSelectColor(item)}
                                                ></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className={cx('calendar')}>
                                <DatePicker />
                            </div>
                            <div className={cx('note')}>
                                <span className={cx('desc-icon')}>
                                    <BsJustifyLeft />
                                </span>
                                <div className={cx('desc')}>
                                    <textarea
                                        className={cx('textarea')}
                                        placeholder="Add description"
                                        name="description"
                                        {...register('description')}
                                    ></textarea>
                                    <span className={cx('underline-desc')}></span>
                                </div>
                            </div>
                            <div className={cx('image')}>
                                <span className={cx('image-icon')}>
                                    <BsCardImage />
                                </span>
                                <div className={cx('upload-img')}>
                                    <label htmlFor="choose-img" className={cx('choose-img-btn')}>
                                        <BsArrowBarUp />
                                        Choose a photo
                                    </label>
                                    <input id="choose-img" type="file" hidden onChange={handleFileUpload} />
                                </div>
                            </div>
                            <div className={cx('preview')}>
                                {previewSourcePhoto ? (
                                    <img className={cx('preview-img')} src={`${previewSourcePhoto}`} alt="img" />
                                ) : null}
                                <span className={cx('upload-icon')}>
                                    <BsFillCloudArrowUpFill />
                                </span>
                                <span className={cx('text')}>No file chosen, yet!</span>
                                <span className={cx('close-img-btn')}>
                                    <FaTimes />
                                </span>
                            </div>

                            <div className={cx('action-btn')}>
                                <button className={cx('cancel-btn')} type="button" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button className={cx('save-btn')} type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </Modal>
            </AnimatePresence>
        );
    }
}

export default CreateKanbanItem;
