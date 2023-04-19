import { Outlet } from 'react-router-dom';
import {
    Header,
    Nav,
    NavItem,
  } from '../../pages/MyPageStyles';
  
const Layout = () => {
    
 

    return (
        <div>
            <Header>
                <Nav>
                    <NavItem to="/login">로그인</NavItem>
                    <NavItem to="/signup">회원가입</NavItem>
                    <NavItem to="/mypage">마이 페이지</NavItem>
                </Nav>
            </Header>
            <main>
                <Outlet />
            </main>
            <footer>  
            </footer>
        </div>
    )
}

export default Layout;