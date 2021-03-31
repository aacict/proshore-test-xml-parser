import fileController from './fileController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  router.post("/upload",validations['fileValidation'], fileController.uploadFile);
  router.get("/download", fileController.downloadFile);
};

export default routes;