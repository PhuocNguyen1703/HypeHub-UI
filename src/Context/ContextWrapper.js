import dayjs from 'dayjs';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function ContextWrapper({ children }) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>{children}</GlobalContext.Provider>;
}

export default ContextWrapper;
