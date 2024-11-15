import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import { Content, MainContainer } from './components/MainContainer/MainContainer';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainContainer>
        <Content>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
        </Content>
      </MainContainer>
    </AuthProvider>
  );
};

export default App;
