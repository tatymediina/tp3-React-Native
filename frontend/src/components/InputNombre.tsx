import { useState, useEffect } from 'react';

export const InputNombre = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    if (nombre) {
      setError('');
      setMensaje('');
    }
  }, [nombre]);

  const handleClick = async () => {
    if (!nombre.trim()) {
      setError('Por favor ingresa un nombre');
      return;
    }

    setIsLoading(true);
    setError('');
    setMensaje('');

    try {
  
      const validarResponse = await fetch(`http://localhost:3000/validar/${encodeURIComponent(nombre)}`);
      const validarData = await validarResponse.json();

      if (!validarData.valido) {
        setError(validarData.mensaje || 'Nombre inválido');
        setIsLoading(false);
        return;
      }

      const saludoResponse = await fetch(`http://localhost:3000/saludo/${encodeURIComponent(nombre)}`);
      const saludoData = await saludoResponse.json();
      
      setMensaje(saludoData.mensaje);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al comunicarse con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center max-w-md mx-auto p-6 space-y-4 bg-amber-50 rounded-lg shadow-md mt-6'>
  <h2 className='font-bold text-center text-2xl text-amber-700'>Ingresa tu nombre</h2>
  
  <input
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    placeholder="Ingresa tu nombre acá"
    className='w-full p-3 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors'
    disabled={isLoading}
  />
  
  <button 
    onClick={handleClick}
    disabled={isLoading}
    className={`rounded-lg p-3 font-medium text-white transition-colors ${
      isLoading 
        ? 'bg-amber-400 cursor-not-allowed' 
        : 'bg-amber-600 hover:bg-amber-500 active:bg-amber-700'
    }`}
  >
    {isLoading ? (
      <span className="flex items-center justify-center">
        Enviando...
      </span>
    ) : 'Enviar'}
  </button>

  {error && (
    <p className='text-red-500 font-medium text-center p-2 bg-red-50 rounded-lg'>
      {error}
    </p>
  )}
  
  {mensaje && (
    <p className='text-green-600 font-medium text-center p-2 bg-green-50 rounded-lg'>
      {mensaje}
    </p>
  )}
</div>
  );
};