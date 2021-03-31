import {Router} from 'express';
import orderRoute from '../components/order/orderRoute';
import pageRoute from '../components/pages/pagesRoute';

//routes initialization
const router = () => {
  const router:any = Router();
  orderRoute(router);
  pageRoute(router);
  return router;
};

export default router;
