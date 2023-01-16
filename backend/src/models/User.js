const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Activity, { foreignKey: 'user_id', as: 'activities' });
    } 
}

module.exports = User;