To run the project
PRE-REQUIREMENTS:

-node

-typescript

-mysql


STEPS:
>>clone the repo.

>>goto the project folder.

>>create .env file with the following properties

        PORT = 4000
        DB_PORT = 3306
        DB_DATABASE = proshoreTestDb
        DB_USERNAME = root
        DB_HOST = localhost
        DB_PASSWORD = ''
        DB_DIALECT = 'mysql'


>>insert the command npm install to install node modules.

>>insert the command npx sequelize db:drop to drop db.

>>insert the command npx sequelize db:create to create db.

>>insert the command npx sequelize db:migrate to migrate tables.

>>insert the command npm run serve to run the application.

>>goto http://localhost:4000/.