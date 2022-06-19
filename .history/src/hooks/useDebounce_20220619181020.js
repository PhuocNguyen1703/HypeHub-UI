import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      setTimeout(() => {
        
      }, );
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
