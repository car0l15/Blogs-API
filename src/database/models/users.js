const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("Users", {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPosts, { foreignKey: "userId", as:"blogPosts" })
  }
  
  return UsersTable;
}

module.exports = UsersSchema;