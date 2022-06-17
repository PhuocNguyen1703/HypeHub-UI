import React, { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.logo);
    };

    return <img className={classNames(styles.sub-)} ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);
