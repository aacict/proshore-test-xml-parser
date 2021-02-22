import staticPageController from './staticPagesController'

const routes = (router: any) => {
  // route to get form user and email to generate pattern to store in db
  router.get("/name-email-form", staticPageController.getNameEmailForm);

  //route to post name and domain to get domain email
  router.get("/name-domain-form", staticPageController.getNameDomainForm);

};

export default routes;