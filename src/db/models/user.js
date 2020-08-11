'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Replies, {
                foreignKey: 'UserId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
            this.hasMany(models.Thread, {
                foreignKey: 'UserId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    };
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        full_name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};