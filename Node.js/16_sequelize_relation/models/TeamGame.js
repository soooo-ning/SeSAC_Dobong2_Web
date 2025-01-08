const TeamGameModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'teamgame',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

module.exports = TeamGameModel;
