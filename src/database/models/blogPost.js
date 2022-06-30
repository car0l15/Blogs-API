const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define("BlogPost", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true},
  });

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.belongsTo(models.User, { foreignKey: "userId", as: "user" }) //não sei se o as pode dar algum problema pro avaliador
  }

  // BlogPostsTable.associate = (models) => {
  //   BlogPostsTable.hasMany(models.PostCategories, { foreignKey: "postId" })
  // } o monitor falou que não era necessário o hasMany neste caso

  return BlogPostsTable;
}

module.exports = BlogPostsSchema;