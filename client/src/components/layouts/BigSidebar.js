import React from 'react';
import Wrapper from '../../assets/wrappers/BigSidebar';
import { useAppProvider } from '../../context/ContextProvider';
import Logo from '../Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useAppProvider();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
