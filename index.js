import { Sequelize } from "sequelize";

const sequelize = new Sequelize('BD2', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

conectar();

async function conectar(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}