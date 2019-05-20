module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    finish: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
};