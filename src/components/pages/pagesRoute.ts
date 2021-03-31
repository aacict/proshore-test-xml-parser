import staticPageController from './pagesController'

const routes = (router: any) => {
    // default route
    router.get("/", (req, res, next)=> {
        return res.redirect('/upload');
    });
  router.get("/upload", staticPageController.getUploadPage);

  router.get("/orders-list", staticPageController.getOrderListPage);

  router.get("/order/product-list", staticPageController.getOrderProductListPage);

};

export default routes;