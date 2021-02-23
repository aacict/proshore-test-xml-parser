import {Router} from 'express';
import userRoute from '../components/User/userRoute';
import pagesRoute from '../components/pages/pagesRoute';


const router = () => {
  const router:any = Router();
  userRoute(router);
  pagesRoute(router);
  return router;
};

export default router;
