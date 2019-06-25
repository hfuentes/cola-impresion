const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('Hola Mundo');
});
app.listen(3099, () => {
	console.log('Servidor iniciado en puerto 3099');
});