import {Router} from 'express';
import userRoute from '../components/User/userRoute';
import staticPagesRoute from '../components/staticPages/staticPagesRoute';


const router = () => {
  const router:any = Router();
  userRoute(router);
  staticPagesRoute(router);
  return router;
};

export default router;
