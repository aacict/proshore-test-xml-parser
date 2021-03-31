import orderController from './orderController'

const routes = (router: any) => {
 
  router.get("/orders", orderController.getOrders);

  router.get("/order/:order_id/product",orderController.getOrderProducts);

};

export default routes;