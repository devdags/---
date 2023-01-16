const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    async store(request, response) {
        const { login, senha } = request.body;

        const userLoginExists = await User.findOne({ where: { login: login } })

        if (userLoginExists) {
            return response.status(451).send({
                message: "Login ja cadastrado",
            });
        } else {
            const senhaCrypeted = await bcrypt.hash(senha, saltRounds);
            const user = await User.create({
                login, senha: senhaCrypeted
            });
            return response.json(user);
        }

    },

}