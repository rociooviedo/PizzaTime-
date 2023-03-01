const user_Controller = require("../controllers/user.controller")
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.post('/api/register', user_Controller.register);
    app.post('/api/login', user_Controller.login)
    app.put("/api/user/actualizar/:id", user_Controller.updateUsuario);
}