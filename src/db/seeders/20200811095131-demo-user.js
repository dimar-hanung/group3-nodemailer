'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                username: 'pancaputra',
                password: '12345',
                email: 'rectapanca@gmail.com',
                full_name: 'Panca Putra',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'dimarhanung',
                password: '12345',
                email: 'dimarhanung@gmail.com.com',
                full_name: 'Dimar Hanung Prakoso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'musyahid2',
                password: '12345',
                email: 'musyahid2@gmail.com',
                full_name: 'Musyahid Abror',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'subhandinda',
                password: '12345',
                email: 'subhan.dinda.putra@gmail.com',
                full_name: 'Subhan Dinda Putra',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            

        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};