import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import TodayPage from './components/pages/TodayPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/hoje' element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}