import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      setTimeo
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
