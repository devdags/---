const { Model, DataTypes } = require("sequelize");

class Activity extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            status: DataTypes.STRING,
            data_hora_inicio: DataTypes.STRING,
            data_hora_termino: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
    } 
}

module.exports = Activity;