module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vouchers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rules: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      validity: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      regularPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('vouchers');
  },
};
