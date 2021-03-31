import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import './config/dbConnection';
import router from './helpers/routerIndex'


const app: any = express();
const port: any = process.env.PORT;

app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(express.json());

// set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Routes setup
const apiRoutes: any = router();
app.use('/', apiRoutes);

app.listen(port, () => {
    try {
        return console.log(`server is listening on ${port}`);
    } catch (error) {
        return console.log(error)
    }
});