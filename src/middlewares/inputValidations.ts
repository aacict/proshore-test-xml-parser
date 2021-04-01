import Model from "../models";
const validations = {
   fileValidation: async(req, res, next) => {
    try {
      const fileFormats = ['xlsx', 'xls', 'csv']
      const fileFormat = req.files['file'].name.split('.').pop();
      if(!fileFormats.includes(fileFormat)){
          return res.send('This format is not allowed')
      }
      next();
    } catch (error) {
      console.log(error)
    }
   }
  }
  
  export default validations;
  