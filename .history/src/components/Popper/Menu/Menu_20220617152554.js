import React, { Children } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ Children }) {
    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <h2>window.addEventListener("load", function () {
                        const toggle = document.querySelector(".menu-toggle");
                        const menu = document.querySelector(".menu");
                        toggle && toggle.addEventListener("click", handleToggleMenu);
                        function handleToggleMenu(e) {
                          menu && menu.classList.add("is-show");
                        }
                        document.addEventListener("click", handleClickOutside);
                        function handleClickOutside(e) {
                          if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
                            return;
                          menu && menu.classList.remove("is-show");
                        }
                      });</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {Children}
        </Tippy>
    );
}

export default Menu;
