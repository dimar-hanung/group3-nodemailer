'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Threads', [{
                title: 'thread pertama',
                content: 'lorem ipsum dolar ismet thread pertama',
                status: 'publish',
                UserId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'thread kedua',
                content: 'lorem ipsum dolar ismet thread kedua',
                status: 'publish',
                UserId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'new normal thread',
                content: 'New normal thread lorem ipsum dolar ismet thread',
                status: 'unpublish',
                UserId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Threads', null, {});
    }
};