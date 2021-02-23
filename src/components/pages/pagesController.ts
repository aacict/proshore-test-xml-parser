
const services = {
    getNameEmailForm: (req, res, next)=> {
      res.render('userPage',{page:'user-info'});
    },
    getNameDomainForm: (req, res, next)=> {
      res.render('userPage',{page:'domain-email'});
    }
}

export default services;
