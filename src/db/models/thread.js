'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Thread extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'UserId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })

            this.hasMany(models.Replies, {
                foreignKey: 'ThreadId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    };
    Thread.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        UserId: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Thread',
    });
    return Thread;
};