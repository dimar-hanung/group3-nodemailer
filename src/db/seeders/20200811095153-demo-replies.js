'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Replies', [{
                content: 'nice replies',
                UserId: 2,
                ThreadId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'second nice replies',
                UserId: 2,
                ThreadId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Exactly new normal',
                UserId: 1,
                ThreadId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Replies', null, {});
    }
};