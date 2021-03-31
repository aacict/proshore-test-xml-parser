
const pageControllers = {
  //send user info page to the view
    getUploadPage: (req, res, next)=> {
      res.render('upload',{});
    },

    getOrderProductListPage: (req, res, next)=> {
      res.render('products',{});
    },

    getOrderListPage: (req, res, next)=> {
      res.render('orders',{});
    }
}

export default pageControllers;
