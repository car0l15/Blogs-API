const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("User", {
    id: DataTypes.INTEGER,
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