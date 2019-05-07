
// Importar dependencias (plugins)
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitor_rodolfo'
});


app.get('/', (req, res) => {
    res.send('Servidor de registros Rodolfo');
});

app.get('/registers', (req, res) => {
    pool.query("SELECT * FROM registers", function (err, response) {
        if (err) throw err;
        res.send(response);
    });
})


app.post('/registers', (req, res) => {
    pool.query(`INSERT INTO registers VALUES (NULL, ${req.body.temperature}, ${req.body.relative_humidity}, ${req.body.luminescence})`, function (err, response) {
        if (err) throw err;
        if (response.affectedRows > 0) res.send("Registro agregado.");
        else res.send("No se agregó registro");
    });
})




app.listen(3000, () => console.log('Registers app listening on port 3000!'));