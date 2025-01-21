const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'user',
    {
      id: {
        // id int primary key auto_increment
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );

  return model;
};

module.exports = User;
