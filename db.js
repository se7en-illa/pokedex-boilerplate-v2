const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pokedex", "mohd", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
