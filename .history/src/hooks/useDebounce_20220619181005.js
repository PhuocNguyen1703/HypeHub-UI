import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
