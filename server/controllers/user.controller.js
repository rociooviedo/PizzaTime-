const User = require('../models/user.model');
const jwtConfig = require('../config/jwt.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {

    User.findOne({ email: req.body.email })
        .then(data => {
            if (!data) {
                console.log(req.body)
                User.create(req.body)
                    .then(user => res.json(user))
                    .catch(errors => {
                        console.log(errors)
                        res.status(500).json(errors)
                    });
            } else {
                console.log(res)
                res.status(500).json({
                    errors: {
                        email: {
                            name: 'ValidatorError',
                            message: 'El correo ya esta registrado'
                        }
                    }
                })
            }
        });
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(resp => {
            if (resp) {
                bcrypt.compare(req.body.password, resp.password)
                    .then(valid => {
                        if (valid) {
                            const payload = {
                                id: resp._id,
                                nombre: resp.nombre,
                                apellido: resp.apellido,
                                direccion: resp.direccion,
                                ciudad: resp.ciudad,
                                email: resp.email
                            };
                            const newToken = jwt.sign(payload, jwtConfig.secret);
                            res.cookie("usertoken", newToken, jwtConfig.secret, { httpOly: true })
                                .json({ success: true, user: payload });
                        } else {
                            res.status(500).json({ message: "Contraseña invalida" });
                        }
                    })
            } else {
                res.status(500).json({ message: "El usuario no existe" });
            }
        })
}
module.exports.updateUsuario= (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}