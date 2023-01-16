const Activity = require("../models/Activity");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const { update } = require("../models/User");
const saltRounds = 10;

module.exports = {
    async store(request, response) {
        const { nome, descricao, data_hora_inicio, data_hora_termino, status, user_id } = request.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return response.status(400).json({ error: 'User not found' });
        }

        const activity = await Activity.create({
            nome, descricao, data_hora_inicio, data_hora_termino, status, user_id
        });

        return response.json(activity);
    },

    async index(request, response) {
        const { user_id } = request.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return response.status(400).json({ error: 'User not found' });
        }

        const activities = await Activity.findAll({ where: { user_id: user_id } });

        return response.json(activities);
    },

    async delete(request, response) {
        const { id, user_id } = request.body;

        const activity = await Activity.findByPk(id);

        if (!activity) {
            return response.status(400).json({ error: 'Activity not found' });
        }

        await Activity.destroy({where: {id: id}});

        const activities = await Activity.findAll({ where: { user_id: user_id } });

        return response.json(activities);
    },

    async update(request, response) {
        const { id, nome, descricao, data_hora_inicio, data_hora_termino, status, user_id  } = request.body;

        const activity = await Activity.findByPk(id);

        if (!activity) {
            return response.status(400).json({ error: 'Activity not found' });
        }

        await Activity.update({nome, descricao, data_hora_inicio, data_hora_termino, status, user_id}, {where: {id: id}});

        return response.json({msg: 'Atividade atualizada com sucesso!'});
    },

}