import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';

app.use(cors());
app.use(express.static('public'));


app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ mensaje: `Hola, ${nombre}!` }); 
});


app.get('/validar/:nombre', (req, res) => {
  const { nombre } = req.params;
  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,}$/.test(nombre);

  if (nombreValido) {
    res.json({ valido: true, mensaje: "El nombre es válido" });
  } else {
    res.json({ valido: false, mensaje: "El nombre no es válido" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});