import {Sequelize} from "sequelize";

// Option 1: Passing parameters separately
const host: any = process.env.DB_HOST
const port: any = process.env.DB_PORT
const dialect: any = process.env.DB_DIALECT
const database: any = process.env.DB_DATABASE
const username: any = process.env.DB_USERNAME
const password: any = process.env.DB_PASSWORD
const sequelize = new Sequelize(
    database,
    username,
    password,
    {
      host,
      port,
      dialect : 'mysql',
      logging: function(str) {
        // do your own logging
        console.log(str);
      },
      define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        timestamps: false,
      },
    },
);

sequelize
    .authenticate()
    .then(() => {
      console.log('Database Connection has been established successfully.');
    })
    .catch((err) => {
      console.log('Unable to connect to the database:', err);
    });

export default sequelize;
