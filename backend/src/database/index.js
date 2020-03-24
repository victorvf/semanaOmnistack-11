import Sequelize from 'sequelize';

import databaseConfig from '../config/database.js';

// import Ong from '../app/models/Ong';
// import Incident from '../app/models/Incident';

const models = [];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
