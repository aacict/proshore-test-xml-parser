import fileController from './fileController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  router.post("/upload", fileController.uploadCsvFile);
  router.post("/download-filter/product", fileController.downloadFilterFile);
};

export default routes;