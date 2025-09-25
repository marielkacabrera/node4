const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Esta Pagina es especial')
});

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});