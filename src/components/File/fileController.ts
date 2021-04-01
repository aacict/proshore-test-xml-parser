import Model from "../../models";
import csv from 'csvtojson';

const controller = {
  uploadCsvFile: async(req: any, res: any, next: any)=> {
   try {
     console.log(req.body.file['csv_file'])
    csv().on('data',(data)=>{
        //data is a buffer object
        const jsonStr= data.toString('utf8')
        console.log(jsonStr)
    })
   } catch (error) {
     console.log(error)
     return res.status(500).send({status: false, message: 'internal server error'})
   }
  },
  downloadFile:  async(req: any, res: any, next: any)=> {
    try {
     
    } catch (error) {
      console.log(error)
      return res.status(500).send({status: false, message: 'internal server error'})
    }
  },
}

export default controller;
