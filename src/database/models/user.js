const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email:{ type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, { foreignKey: "userId", as:"blogPosts" })
  }
  
  return UsersTable;
}

module.exports = UsersSchema;