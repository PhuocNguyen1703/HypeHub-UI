import { useState } from 'react';

export const useModal = () => {
  const [type, setType] = useState(null);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (type = null, data = {}) => {
    setIsOpen(true);
    setType(type);
    setData(data);
    console.log('open');
  };

  const onClose = () => {
    setType(null);
    setIsOpen(false);
    setData({});
  };

  return { type, data, isOpen, onOpen, onClose };
};
