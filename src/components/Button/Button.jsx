import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  leftIcon,
  colorLeftIcon,
  rightIcon,
  colorRightIcon,
  className,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx({
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && (
        <span className={cx('icon')} style={{ color: colorLeftIcon }}>
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className={cx('icon')} style={{ color: colorRightIcon }}>
          {rightIcon}
        </span>
      )}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
