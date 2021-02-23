
const services = {
  //send user info page to the view
    getNameEmailForm: (req, res, next)=> {
      res.render('userPage',{page:'user-info'});
    },

  //send domain info page to the view
    getNameDomainForm: (req, res, next)=> {
      res.render('userPage',{page:'domain-email'});
    }
}

export default services;
