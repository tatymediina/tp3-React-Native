import { useParams } from 'react-router-dom';

const Saludo = () => {
  const { nombre } = useParams();

  return <h2 className='text-4xl font-bold text-center text-amber-600 '>Bienvenido, {nombre}!</h2>;
};

export {Saludo} ;
