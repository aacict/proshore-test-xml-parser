
const pageControllers = {
  //send user info page to the view
    getUploadPage: (req, res, next)=> {
      res.render('upload',{});
    },

    // getOrderProducts: (req, res, next)=> {
    //   res.render('products',{});
    // },

    // getOrders: (req, res, next)=> {
    //   res.render('orders',{});
    // }
}

export default pageControllers;
