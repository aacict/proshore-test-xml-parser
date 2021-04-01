import Model from "../../models";
import ProductService from "../product/productService";
const pageControllers = {

    getProductListPage: async(req: any, res: any, next: any)=> {
      const data = await ProductService.getProducts(req, res, next);
      return res.render('products',{data, error:{}});
    }
}

export default pageControllers;
