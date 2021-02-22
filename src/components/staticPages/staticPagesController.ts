
const services = {
    getNameEmailForm: (req, res, next)=> {
      res.render('name-email-form');
    },
    getNameDomainForm: (req, res, next)=> {
      res.render('name-domain-form');
    }
}

export default services;
