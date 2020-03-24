import Sequelize, { Model } from 'sequelize';

class Incident extends Model {
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            value: Sequelize.FLOAT,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong'});
    }
}

export default Incident;
