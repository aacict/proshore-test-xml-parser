
const pageControllers = {
  //send user info page to the view
    getNameEmailForm: (req, res, next)=> {
      res.render('userPage',{page:'user-info', errors:{}, oldValue:{}});
    },

  //send domain info page to the view
    getNameDomainForm: (req, res, next)=> {
      res.render('userPage',{page:'domain-email', errors:{},  oldValue: {}});
    }
}

export default pageControllers;
