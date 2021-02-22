import userController from './userController'

const routes = (router: any) => {
  // route to post user and email and generate pattern to store in db
  router.post("/user-info", userController.addUserEmailPattern);

  //route to post name and domain to get domain email
  router.post("/get-user-email", userController.getDomainEmail);

};

export default routes;