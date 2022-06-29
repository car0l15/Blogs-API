const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define("Category", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  });

  return CategoriesTable;
}

module.exports = CategoriesSchema;