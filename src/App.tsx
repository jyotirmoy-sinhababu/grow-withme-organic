import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import UserForm from './components/FormComp/UserForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<UserForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
