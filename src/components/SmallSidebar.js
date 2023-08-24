import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';
const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);

    const distpatch = useDispatch();

    const toggle = () => {
        distpatch(toggleSidebar());
    };
    return (
        <Wrapper>
            <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className="content">
                    <button className="close-btn" onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                        <NavLinks toggleSidebar={toggle} />
                    </header>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;
