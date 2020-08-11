'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Replies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                foreignKey: 'UserId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })

            this.belongsTo(models.Thread, {
                foreignKey: 'ThreadId',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })

        }
    };
    Replies.init({
        content: DataTypes.STRING,
        ThreadId: DataTypes.INTEGER,
        UserId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Replies',
    });
    return Replies;
};