'use strict';

var _controller = require('./controller');

var _sql = require('./sql');

var _sql2 = _interopRequireDefault(_sql);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
  return res.send('Servidor de registros Rodolfo');
});
app.get('/registers', function (req, res) {
  return (0, _controller.getRegisters)(_sql2.default, req, res);
});
app.post('/registers', function (req, res) {
  return (0, _controller.addRegister)(_sql2.default, req, res);
});

app.listen(3000, function () {
  return console.log('Registers app listening on port 3000!');
});