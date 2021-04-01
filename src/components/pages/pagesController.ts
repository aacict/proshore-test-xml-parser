import Model from "../../models";
const pageControllers = {

    getProductListPage: async(req: any, res: any, next: any)=> {
      // const dates = req.query['filter'] ?  req.query['filter'].split('-'): '';
      const limit = req.query['limit'] && req.query['limit'] != 0 ? parseInt(req.query['limit'], 10) : 10;
      const page = req.query['page'] && req.query['page'] != 0 ? parseInt(req.query['page'], 10) : 1;
      const offset = (page - 1) * limit;

      const products = await Model.Product.findAll({limit ,offset});
      const total_products = await Model.Product.count();
      const responseProducts = await Promise.all(
        products.map(async(product)=>{
            const tempProduct = JSON.parse(JSON.stringify(product))
            const order = await Model.Order.findOne({where:{id: product.order_id}});
            tempProduct['order_number'] = order['order_number']
            return tempProduct;
        })
      )
      const data ={
        products:responseProducts,
        page,
        limit,
        total_products,
      }
      return res.render('products',{data, error:{}});
    }
}

export default pageControllers;
