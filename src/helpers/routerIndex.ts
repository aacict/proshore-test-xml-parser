import {Router} from 'express';
import fileRoute from '../components/file/fileRoute';
import pageRoute from '../components/pages/pagesRoute';

//routes initialization
const router = () => {
  const router:any = Router();
  pageRoute(router);
  fileRoute(router);
  return router;
};

export default router;
