
const validations = {
    //send user info page to the view
      userInfoValidation: (req, res, next)=> {
          const errors = {}
        if(req.body['full_name'].match(/^[a-zA-Z\s]*$/)){
            if(req.body['email'].match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
                next();
            }else{
                errors['email'] = 'Please enter a valid email address'
                  return res.render('userPage',{page:'user-info', errors, oldValue: req.body});

            }
        }
        else{
            errors['full_name'] = 'Full name can only contains letters and spaces'
             return res.render('userPage',{page:'user-info', errors,  oldValue: req.body});

        }
      },
  
    //send domain info page to the view
      domainEmailValidation: (req, res, next)=> {
        const errors = {}
        if(req.body['full_name'].match(/^[a-zA-Z\s]*$/)){
            if(req.body['domain'].match(/^[a-zA-Z.]*$/)){
                next();
            }else{
                errors['domain'] = 'Please enter a valid domain address'
                return res.render('userPage',{page:'domain-email', errors, oldValue: req.body});
            }
        }
        else{
            errors['full_name'] = 'Full name can only contains letters and spaces'
            return res.render('userPage',{page:'domain-email', errors, oldValue: req.body});
        }
      }
  }
  
  export default validations;
  