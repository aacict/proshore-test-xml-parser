// swagger implementation
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../swagger.json';
const swagger = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
export default swagger;
