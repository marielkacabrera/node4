const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', req, res => {
    res.send('Coobright con Node!')
});

app.get('/saludo/:nombre', (req, res) => {
  res.send(`Hola, ${req.params.nombre}! Bienvenido a la app desplegada 🎉`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});