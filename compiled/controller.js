"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getRegisters = exports.getRegisters = function getRegisters(pool, req, res) {
    return pool.query("SELECT * FROM registers", function (err, response) {
        if (err) throw err;
        res.send(response);
    });
};

var addRegister = exports.addRegister = function addRegister(pool, req, res) {
    return pool.query("INSERT INTO registers VALUES (NULL, " + req.body.temperature + ", " + req.body.relative_humidity + ", " + req.body.luminescence + ")", function (err, response) {
        if (err) throw err;
        if (response.affectedRows > 0) res.send("Registro agregado.");else res.send("No se agregó registro");
    });
};