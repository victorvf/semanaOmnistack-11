import Sequelize, { Model } from 'sequelize';
import crypto from 'crypto';

class Ong extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            whatsapp: Sequelize.STRING,
            city: Sequelize.STRING,
            uf: Sequelize.STRING,
        }, {
            sequelize
        });

        this.addHook('beforeSave', async user => {
            user.id = await crypto.randomBytes(4).toString('HEX');
        });

        return this;
    }
}

export default Ong;
