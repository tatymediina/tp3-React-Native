
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className='font-bold text-4xl mb-10'>Trabajo práctico</h1>
      <Outlet /> 
    </div>
  );
};

export { MainLayout } ;
