const ProfileModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'profile',
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

module.exports = ProfileModel;
