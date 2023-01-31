import Wrapper from '../../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppProvider } from '../../context/ContextProvider';
import links from '../../utils/Links';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppProvider();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { id, path, text, icon } = link;
              return (
                <NavLink
                  key={id}
                  to={path}
                  onClick={toggleSidebar}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
