import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';

app.use(cors());
app.use(express.static('public'));

const usuariosValidos = ['Tatiana', 'Ailin', 'Ezequiel', 'Selene', 'Mariano', 'Brandon', 'Nazarena', 'Axel'];

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ mensaje: `¡Bienvenido/a, ${nombre}!` }); 
});

app.get('/validar/:nombre', (req, res) => {
  const { nombre } = req.params;

  const formatoValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,}$/.test(nombre);
  
  if (!formatoValido) {
    return res.json({ 
      valido: false, 
      mensaje: "El nombre no tiene un formato válido" 
    });
  }

  const nombreEncontrado = usuariosValidos.find(
    user => user.toLowerCase() === nombre.toLowerCase()
  );

  if (!nombreEncontrado) {
    return res.json({ 
      valido: false, 
      mensaje: "Usuario no encontrado" 
    });
  }
  res.json({ 
    valido: true, 
    mensaje: `Usuario válido: ${nombreEncontrado}` 
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});