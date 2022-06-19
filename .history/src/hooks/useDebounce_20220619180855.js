import { useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    return debouncedValue;
}

export default useDebounce;
