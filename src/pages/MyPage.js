import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import MyInfo from '../components/Mypage/MyInfo';
import Timeline from '../components/Mypage/Timeline';
import Favorites from '../components/Mypage/Favorites';
import InterestedProducts from '../components/Mypage/InterestedProducts';
import {
  Container,
  Header,
  Nav,
  NavItem,
  Title,
  Main,
  Sidebar,
  SidebarItem,
  Content,
  PageContainer,
} from './MyPageStyles';


const MainPage = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/login">로그인</NavItem>
          <NavItem to="/signup">회원가입</NavItem>
          <NavItem to="/mypage">마이 페이지</NavItem>
        </Nav>
      </Header>
      <Link to="/">
        <Title>마이 페이지</Title>
      </Link>
      <Container>
        <Main>
          <Sidebar>
            <SidebarItem to="/myinfo">내 정보</SidebarItem>
            <SidebarItem to="/timeline">타임라인</SidebarItem>
            <SidebarItem to="/favorites">찜 목록</SidebarItem>
            <SidebarItem to="/interested-products">관심 상품</SidebarItem>
          </Sidebar>
          <Content>
            <PageContainer>
              <Routes>
                <Route path="/myinfo" element={<MyInfo />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/interested-products" element={<InterestedProducts />} />
              </Routes>
            </PageContainer>
          </Content>
        </Main>
      </Container>
    </>
  );
};

export default MainPage;



