import userController from './userController'
import validations from "../../middlewares/inputValidations";

const routes = (router: any) => {
  // route to post user and email and generate pattern to store in db
  router.post("/user-info",validations['userInfoValidation'], userController.addUserEmailPattern);

  //route to post name and domain to get domain email
  router.post("/domain-email",validations['domainEmailValidation'], userController.getDomainEmail);

};

export default routes;