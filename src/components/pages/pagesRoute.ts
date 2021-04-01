import staticPageController from './pagesController'

const routes = (router: any) => {
    // default route
    router.get("/", (req, res, next)=> {
        return res.redirect('/product-list');
    });
    
  router.get("/product-list", staticPageController.getProductListPage);

};

export default routes;