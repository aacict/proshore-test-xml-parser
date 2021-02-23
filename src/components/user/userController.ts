import { EmailPattern } from "../../models";

//function to take sub names from full name provided
const splitSubnamesFromFullname = async(fullname) => {
  const full_name: any = fullname.trim().split(' ');
  const first_name: string = full_name[0];
  const last_name: string = full_name.length == 1 ? '' : full_name[full_name.length-1] ;

  let middle_name: string = '' ;
   if(full_name.length >= 3){
   for (let index = 1; index < full_name.length-1; index++) {
     middle_name = middle_name + `${full_name[index]}`;
   }
   }
  return {first_name, middle_name, last_name}
};
const services = {
  //takes user full name and splits full name into sub names and make changes to email accordingly
      addUserEmailPattern: async(req: any, res: any, next:any)=> {
        const {first_name, middle_name, last_name} = await splitSubnamesFromFullname(req.body['full_name'])
        const email_parts: string = req.body['email'].trim().split('@')

        //regex for matching sub names in email
        const first_name_reg:any = new RegExp(`(?<![{\w])(${first_name})(?![\w}])`,'gi');
        const last_name_reg:any = new RegExp(`(?<![{\w])(${last_name})(?![\w}])`,'gi');
        const mid_name_reg:any = new RegExp(`(?<![{\w])(${middle_name})(?![\w}])`,'gi');
        
        //generating pattern and attach domain to the pattern
        let email_pattern:string = email_parts[0].replace(first_name_reg,'{fn}')
        email_pattern =  middle_name ? email_pattern.replace(mid_name_reg,'{mn}') : email_pattern;
        email_pattern = last_name ? email_pattern.replace(last_name_reg,'{ln}') : email_pattern;
        email_pattern += `@${email_parts[1].toLowerCase()}`;

        //find in db and save if not exits or increase count
        const emailPattern = await EmailPattern.findOne({email_pattern});
       if(emailPattern){
         emailPattern['count']++;
         await emailPattern.save();
       }else{
        await EmailPattern.create({email_pattern, count: 1});
       }

       return res.send(`successfully loaded to db`);
      },

      //takes user full name and splits full name into sub names and takes highest count email pattern of the domain  and attach user name as the pattern
      getDomainEmail: async(req: any, res: any, next:any)=> {
        const {first_name, middle_name, last_name} = await splitSubnamesFromFullname(req.body['full_name'])
        const domain: string = `@${req.body['domain'].trim()}`;

        //find the domain and sort with max count
        const email_pattern: any = await EmailPattern.findOne({email_pattern: {$regex: domain, $options: 'i'}}).sort({count : -1}).limit(1);
        if(!email_pattern){
          return res.send('no pattern available for the domain')
        }

        //change pattern to user email
        let user_email:string = email_pattern['email_pattern'].replace(/{fn}/g, first_name)
        user_email = middle_name ? user_email.replace(/{mn}/g, middle_name) : user_email.replace(/{mn}/g,  '');
        user_email = last_name ? user_email.replace(/{ln}/g, last_name) : user_email.replace(/{ln}/g,  '');
        return res.send(user_email);
      }
}

export default services;
