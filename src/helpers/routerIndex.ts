import {Router} from 'express';
import orderRoute from '../components/order/orderRoute';
import fileRoute from '../components/file/fileRoute';
import pageRoute from '../components/pages/pagesRoute';

//routes initialization
const router = () => {
  const router:any = Router();
  orderRoute(router);
  pageRoute(router);
  fileRoute(router);
  return router;
};

export default router;
