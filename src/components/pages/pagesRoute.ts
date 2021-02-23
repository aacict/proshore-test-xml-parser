import staticPageController from './pagesController'

const routes = (router: any) => {
  // route to get form user and email to generate pattern to store in db
  router.get("/user-info", staticPageController.getNameEmailForm);

  //route to post name and domain to get domain email
  router.get("/domain-email", staticPageController.getNameDomainForm);

};

export default routes;