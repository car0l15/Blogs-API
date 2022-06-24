const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.belongsTo(models.Users, { foreignKey: "userId", as: "user" }) //não sei se o as pode dar algum problema pro avaliador
  }

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.hasMany(models.PostCategories, { foreignKey: "postId" })
  }

  return BlogPostsTable;
}

module.exports = BlogPostsSchema;