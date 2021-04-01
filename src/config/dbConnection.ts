import {Sequelize} from "sequelize";

// Option 1: Passing parameters separately
const host: any = process.env.DB_HOST
const port: any = process.env.DB_PORT
const dialect: any = process.env.DB_DIALECT
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host,
      port,
      dialect ,
      logging: function(str) {
        // do your own logging
        // console.log(str);
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
