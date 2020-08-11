'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                username: 'putrasr',
                password: '12345',
                email: 'example@example.com',
                full_name: 'Putra Siregar',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'andiwir',
                password: '12345',
                email: 'andiwir@example.com',
                full_name: 'Andi Wirdani',
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};