const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es requerido."]
    },
    apellido:{
        type:String,
        required:[true,"El apellido es requerido."]
    },
    direccion:{
        type:String,
        required:[true,"La direccion es requerido."]
    },
    ciudad:{
        type:String,
        required:[true,"La ciudad es requerido."]
    },
    email:{
        type:String,
        required:[true,"El email es requerido."],
        unique:[true, "El email debe ser único."]
    },
    password:{
        type:String,
        required:[true,"La contraseña es requerida."]
    }
},{timestamps:true})

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas deben coincidir');
    }
    next();
});


UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
});

const User = mongoose.model("users",UserSchema);

module.exports = User;