import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Establishment from '../app/models/Establishment';
import Voucher from '../app/models/Voucher';

const models = [User, Establishment, Voucher];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
