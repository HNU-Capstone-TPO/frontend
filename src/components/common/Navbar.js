import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, LogoWrapper, RightItems } from './NavbarStyles';
import { AuthContext } from '../../contexts/LoggedIn';

const Navbar = () => {

  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const handleLoginButtonClick = () => {
    toggleLogin();
  };
  return (
    <LogoWrapper>
      <Nav>
      <NavItem exact to="/" activeClassName="active" style={{ marginRight: 'auto', marginLeft: '20%' }}>
          <img 
          src={process.env.PUBLIC_URL + '/img/logo.png'} 
          alt="Logo"
          style={{ height: '50px'}} />
        </NavItem>
        <RightItems>
        {isLoggedIn ? (
            <>
              <NavItem to="/" onClick={handleLoginButtonClick}>
                로그아웃
              </NavItem>
            </>
          ) : (
            <>
              <NavItem to="/login" activeClassName="active">
                로그인
              </NavItem>
              <NavItem to="/signup" activeClassName="active">
                회원가입
              </NavItem>
            </>
          )}
          <NavItem to="/mypage" activeClassName="active">
            마이 페이지
          </NavItem>
          </RightItems>
          
      </Nav>
    </LogoWrapper>
  );
};

export default Navbar;
