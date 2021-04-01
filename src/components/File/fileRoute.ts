import fileController from './fileController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  router.post("/upload", validations['fileValidation'] ,fileController.uploadCsvFile);
  router.post("/download", fileController.downloadFilterFile);
};

export default routes;