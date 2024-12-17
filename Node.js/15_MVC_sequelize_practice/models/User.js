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
      userid: {
        // userid varchar(20) not null
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        // pw varchar(20) not null
        type: DataTypes.STRING(20),
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
