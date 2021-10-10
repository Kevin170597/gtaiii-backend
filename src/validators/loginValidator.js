const { body } = require("express-validator");
const bcrypt = require("bcrypt");

const db = require("../database");

module.exports = [
    body("user").isLength({min:1}).withMessage("Debe ingresar su nombre."),
    body("user")
        .custom((value) => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM users WHERE name = ?", value, (err, response) => {
                    response.length > 0 ? resolve(true) : reject(new Error("El usuarion no existe."))
                });
            });
        }),
    body("password").isLength({min:1}).withMessage("Debe ingresar una contraseña."),
    body("password")
        .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM users WHERE name = ?", req.body.user, (err, response) => {
                    if (response.length > 0) {
                        bcrypt.compareSync(value, response[0].password) ? resolve(true) : reject(new Error("Contraseña incorrecta."))
                    }
                    reject(new Error("No olvides tu nombre!"))
                });
            });
        })
]