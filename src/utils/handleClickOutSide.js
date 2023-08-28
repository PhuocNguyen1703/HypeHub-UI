export const handleClickOutSide = (isOpen, isHide, elementRef) => {
  const hideOnClickOutside = (e) => {
    if (isOpen) {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        isHide(!isOpen);
      }
    }
  };

  document.addEventListener('click', hideOnClickOutside, true);
};
