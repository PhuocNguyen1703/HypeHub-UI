import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.logo);
    };

    return (
        <img
            className={cx('sub-avatar', className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default forwardRef(Image);
