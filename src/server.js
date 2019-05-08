
import { getRegisters, addRegister } from './controller';
import mysqlpool from './sql';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Servidor de registros Rodolfo'));
app.get('/registers', (req,res) => getRegisters(mysqlpool, req, res));
app.post('/registers', (req,res) => addRegister(mysqlpool, req, res));



app.listen(3000, () => console.log('Registers app listening on port 3000!'));