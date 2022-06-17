import React, { useState, forwardRef } from 'react';
import avatar from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {};

    return <img ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);
