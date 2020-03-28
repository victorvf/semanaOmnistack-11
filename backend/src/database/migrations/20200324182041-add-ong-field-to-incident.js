module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('incidents', 'ong_id', {
            type: Sequelize.STRING,
            references: {
                model: 'ongs',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            allowNull: false,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('incidents', 'ong_id');
    },
};
