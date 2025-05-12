// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import {MainLayout} from './layout/MainLoyout';
import { Home }  from './pages/Home';
import { Saludo } from './pages/Saludo';
import { Error404 } from './pages/404';
import "../src/App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="saludo/:nombre" element={<Saludo />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
