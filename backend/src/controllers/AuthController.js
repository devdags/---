const User = require("../models/User");
const bcrypt = require('bcrypt');

module.exports = {
    async login(request, response) {
        const { login, senha } = request.body;

        const user = await User.findOne({ where: { login: login } })

        const userMatch = await bcrypt.compare(senha, user.senha);

        if(userMatch) {
            return response.json(user)
        } else {
            return response.status(451).send({
                message: "Credenciais incorretas",
            });
        }        

    },

}