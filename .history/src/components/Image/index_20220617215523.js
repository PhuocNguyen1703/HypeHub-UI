import React, { forwardRef } from 'react';

function Image({ src, alt, ...props }, ref) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} {...props} alt/>;
}

export default forwardRef(Image);
