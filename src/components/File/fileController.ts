import Model from "../../models";
import { readFile,read, write, utils, WorkBook } from 'xlsx'
import fileService from './fileService'

const controller = {
  uploadCsvFile: async(req: any, res: any, next: any)=> {
   try {
    const file = req.files['file'];
    const workbook = read(file.data, {cellDates: true });
    const sheet_name_list = workbook.SheetNames;
    const data = utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
       for (let index = 0; index < data.length; index++) {
        console.log('real:',data[index])

         const keys = Object.keys(data[index])
         const product: any = {}
         keys.map((key)=> {
            product[key.trim().toLowerCase().replace(' ','_')] = data[index][key]
         })
         console.log(product)
        const order = await Model.Order.findOne({where:{order_number: data[index]['Order Number'] }});
        if(!order){
          const newOrder = await Model.Order.create({order_number: data[index]['Order Number'] });
          product['order_id'] = newOrder['id'];
          await Model.Product.create(product)
        }else{
          product['order_id'] = order['id'];
          await Model.Product.create(product)
        }
       }
     return res.redirect('/product-list');
   } catch (error) {
     console.log(error)
     return res.status(500).send({status: false, message: 'internal server error'})
   }
  },
  downloadFilterFile:  async(req: any, res: any, next: any)=> {
    try {
      const {downloadFile, filterProduct} = fileService
     if(req.body['submit'] == 'download'){
     return downloadFile(req, res, next);
     }else{
      return filterProduct(req, res, next);
     }
    } catch (error) {
      console.log(error)
      return res.status(500).send({status: false, message: 'internal server error'})
    }
  },
}

export default controller;
