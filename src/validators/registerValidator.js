const { body } = require("express-validator");

const db = require("../database");

module.exports = [
    body("user").isLength({min:4}).withMessage("Mínimo 4 caracteres."),
    body("email").isEmail().withMessage("Debe insertar un email válido."),
    body("email")
        .custom((value) => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM users WHERE email = ?", value, (err, response) => {
                    if(response.length > 0) {
                        reject(new Error("Email ya registrado."))
                    }
                    resolve(true)
                });
            });
        }),
    body("password").isLength({min:6}).withMessage("Mínimo 6 caracteres."),
    body("password2")
        .custom((value, {req}) => {
            return value != req.body.password ? false : true;
        })
        .withMessage("Las contraseñas no coinciden.")
]