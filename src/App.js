import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './components/pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <StyledMain>
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </StyledMain>
    </BrowserRouter>
  );
}

const StyledMain = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`