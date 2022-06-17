import React, { useState, forwardRef } from 'react';

function Image({ src, alt, ...props }, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} src={src} {...props} alt={alt}/>;
}

export default forwardRef(Image);
