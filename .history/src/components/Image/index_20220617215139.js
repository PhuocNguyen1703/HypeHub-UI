import React, { forwardRef } from 'react';

function Image({ ...props, ref }) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref {...props} />;
}

export default forwardRef(Image);
