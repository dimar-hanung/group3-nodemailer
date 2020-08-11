'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Threads', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.STRING
            },
            UserId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'User',
                    key: 'id',
                    as: 'UserId',
                }

            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Threads');
    }
};