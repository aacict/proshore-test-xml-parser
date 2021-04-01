import fileController from './fileController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  router.post("/upload", fileController.uploadCsvFile);
  router.get("/download", fileController.downloadFile);
};

export default routes;