import React, { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './image.module.scss';

const cx = classNames.bind(styles)

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.logo);
    };

    return <img className={}} ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);
