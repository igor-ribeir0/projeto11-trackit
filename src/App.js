import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import TodayPage from './components/pages/TodayPage';
import HabitPage from './components/pages/HabitPage';
import HistoricPage from './components/pages/HistoricPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/habitos' element={<HabitPage />} />
        <Route path='/historico' element={<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  );
}