"use strict";

var express = require("express");

var router = express.Router();
module.exports = router;
const models = require("../models/model");
const {listHouses} = require("../models/model");


// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get('/houses', function (req, res) {
    res.json(models.listHouses())
})
router.post('/houses', function (req, res) {
    const {house} = req.body
    res.json(models.addHouse(house))
})


router.get('/characters', function (req, res) {
    res.json(models.listCharacters())
})
router.post('/characters', function (req, res) {
    const {name, lastName, house, dateOfBirth, isMuggle} = req.body
    let aux = models.listHouses()
    if (aux.includes(house)) {
        return res.status(200).json( models.addCharacter(name, lastName, house, dateOfBirth, isMuggle))
    }else{
        return res.status(404).json({msg: "La casa ingresada no existe"})
    }
})
// router.get('/characters/:houseName', function (req, res) {
//
//
// })