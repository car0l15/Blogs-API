const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define("PostCategorie", {
    postId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER
  });

  PostCategoriesTable.associate = (models) => {
    PostCategoriesTable.belongsTo(models.BlogPosts, { foreignKey: "postId" })
    PostCategoriesTable.belongsTo(models.Categories, {foreignKey:"categoryId" })
  }

  return PostCategoriesTable;
}

module.exports = PostCategoriesSchema;
