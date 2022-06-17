import React, { useState, forwardRef } from 'react';
import avatar

function Image({ src, alt, ...props }, ref) {


    return <img ref={ref} src={src} {...props} alt={alt}/>;
}

export default forwardRef(Image);
