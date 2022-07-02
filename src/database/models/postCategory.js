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
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategoriesTable.associate = (models) => {
   models.Category.belongsToMany(models.BlogPost, {
    as: 'blogPost',
   foreignKey: 'categoryId',
   through: PostCategoriesTable,
   otherKey: 'postId',
   })
   models.BlogPost.belongsToMany(models.Category,{
    as: 'categories',
    foreignKey: 'postId',
    through: PostCategoriesTable,
    otherKey: 'categoryId',
   })
  }

  return PostCategoriesTable;
}

module.exports = PostCategoriesSchema;
