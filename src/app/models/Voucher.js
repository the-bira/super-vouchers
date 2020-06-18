import Sequelize, { Model } from 'sequelize';

class Voucher extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        rules: Sequelize.STRING,
        validity: Sequelize.DATE,
        price: Sequelize.DECIMAL,
        regularPrice: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
}

export default Voucher;
