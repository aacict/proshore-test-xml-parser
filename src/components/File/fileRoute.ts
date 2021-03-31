import fileController from './fileController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  router.post("/upload",validations['fileValidation'], fileController.uploadFile);
};

export default routes;