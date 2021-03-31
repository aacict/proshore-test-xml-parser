import Model from "../../models";
const services = {
  getOrders: (req, res, next)=> {
    res.render('orders',{});
  },

  getOrderProducts: (req, res, next)=> {
    res.render('products',{});
  },
}

export default services;
