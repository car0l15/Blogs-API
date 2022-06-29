const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    categoryId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
  });

  PostCategoriesTable.associate = (models) => {
   models.Category.belongsToMany(models.BlogPost, {
    as: 'blogPost',
   foreignKey: 'categoryId',
   through: PostCategoriesTable,
   otherKey: 'postId',
   })
   models.BlogPost.belongsToMany(models.Category,{
    as: 'category',
    foreignKey: 'postId',
    through: PostCategoriesTable,
    otherKey: 'categoryId',
   })
  }

  return PostCategoriesTable;
}

module.exports = PostCategoriesSchema;
