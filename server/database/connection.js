const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.veoqjvedlpljudqxunsy:HellYeahBro123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./models/userModel")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established");
  })
  .then((error) => {
    console.log("Error while connection database");
  });

sequelize.sync({ alter: false }).then(() => {
  console.log("Database sync successfully");
});
module.exports = db;
