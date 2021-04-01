import Model from "../../models";
import { Op } from "sequelize";
import moment from "moment";
import ProductService from "../product/productService";
import xlsx from 'json-as-xlsx';

const service = {
  downloadFile: async(req: any, res: any, next: any)=> {
   try {
    const dates = req.body['date'].split('-')
    const startDate = moment(dates[0].trim()).startOf('day')
    const endDate = moment(dates[1].trim()).endOf('day')
    const products =  await Model.Product.findAll({where:{ date: {[Op.gte]: startDate, [Op.lte]: endDate} }})
      if(!products || products.length == 0){
        const data = await ProductService.getProducts(req, res, next)
        return res.render('products',{data, error:{noData: 'This range do not have any data'}})
      }
    const columns = [
        { label: 'Product', value: row => (row.product)}, 
        { label: 'Order Number', value: row => (row.order_number) },
        { label: 'Rate', value: row => ( row.rate) },
        { label: 'Quantity', value: row => (row.quantity ) },
        { label: 'Gross Amount', value: row => (row.gross_amount ) },
        { label: 'Location', value: row => (row.location ) },
        { label: 'Date', value: row => (row.date ) }
      ]
      
      const content = JSON.parse(JSON.stringify(products))
      
      const settings = {
        sheetName: 'FirstSheet',
        fileName: 'Products'
      }
      
    const buffer = xlsx(columns, content, settings, false)
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-disposition': `attachment; filename=${settings.fileName}.xlsx`
    })
    res.end(buffer)
   } catch (error) {
     console.log(error)
     return res.status(500).send({status: false, message: 'internal server error'})
   }
  },
  filterProduct:  async(req: any, res: any, next: any)=> {
    try {
      const limit = req.query['limit'] && req.query['limit'] != 0 ? parseInt(req.query['limit'], 10) : 10;
      const page = req.query['page'] && req.query['page'] != 0 ? parseInt(req.query['page'], 10) : 1;
      const offset = (page - 1) * limit;

      const dates = req.body['date'].split('-')
        const products =  await Model.Product.findAll({where:{ date: {[Op.gte]: moment(dates[0]).startOf('day'), [Op.lte]: moment(dates[1]).endOf('day')} }, limit, offset})
        const total_products =  await Model.Product.count({where:{ date: {[Op.gte]: moment(dates[0]).startOf('day'), [Op.lte]: moment(dates[1]).endOf('day')} }})
        const data = {
          products: JSON.parse(JSON.stringify(products)),
          limit,
          page,
          total_products 
        }
        return res.render('products', {data})
    } catch (error) {
      console.log(error)
      return res.status(500).send({status: false, message: 'internal server error'})
    }
  },
}

export default service;
