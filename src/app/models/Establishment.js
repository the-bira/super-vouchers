import Sequelize, { Model } from 'sequelize';

class Establishment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        description: Sequelize.STRING,
        cnpj: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Establishment;
