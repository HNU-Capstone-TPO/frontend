import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/MyPage'
import Login from './pages/Login'
import Result from './pages/Result';
import Favorites from './components/Mypage/Favorites';
import InterestedProducts from './components/Mypage/InterestedProducts';
import Timeline from './components/Mypage/Timeline';
import Layout from './components/Layout/Layout';
import MyInfo from './components/Mypage/MyInfo';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/interested-products" element={<InterestedProducts />} />
      </Route>
    </Routes>

  );
};

export default App;
