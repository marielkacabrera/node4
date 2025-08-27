const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Coobright con Node!');
});

// Ruta con parámetro
app.get('/saludo/:nombre', (req, res) => {
    res.send(`¡Bienvenido, ${req.params.nombre}! Suscríbete a Coobright`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//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t