const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define("Categorie", {
    name: DataTypes.STRING
  });

  CategoriesTable.associate = (models) => {
    CategoriesTable.hasMany(models.PostCategories, { foreignKey: "categoryId" })
  }

  return CategoriesTable;
}

module.exports = CategoriesSchema;