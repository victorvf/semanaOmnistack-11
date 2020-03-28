import Sequelize, { Model } from 'sequelize';
import generateUniqueId from '../../utils/generateUniqueId';

class Ong extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                whatsapp: Sequelize.STRING,
                city: Sequelize.STRING,
                uf: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async (user) => {
            user.id = generateUniqueId();
        });

        return this;
    }
}

export default Ong;
