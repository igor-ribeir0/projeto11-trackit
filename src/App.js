import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import TodayPage from './components/pages/TodayPage';
import HabitPage from './components/pages/HabitPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/habitos' element={<HabitPage />} />
      </Routes>
    </BrowserRouter>
  );
}