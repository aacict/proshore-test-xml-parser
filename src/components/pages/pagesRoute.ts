import staticPageController from './pagesController'

const routes = (router: any) => {
    // default route
    router.get("/", (req, res, next)=> {
        return res.redirect('/upload');
    });
  // route to get form user and email to generate pattern to store in db
  router.get("/upload", staticPageController.getUploadPage);

  //route to post name and domain to get domain email
  // router.get("/order/:order_id/products", staticPageController.getOrderProducts);

  // router.get("/orders", staticPageController.getOrders);

};

export default routes;