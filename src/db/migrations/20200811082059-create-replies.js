'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Replies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                type: Sequelize.STRING
            },
            ThreadId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'Threads',
                    key: 'id',
                    as: 'ThreadId',
                }
            },
            UserId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'UserId',
                }
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
        await queryInterface.dropTable('Replies');
    }
};