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

//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t