import { EmailPattern } from "../../models";

const splitSubnamesFromFullname = async(fullname) => {
  const full_name: any = fullname.trim().split(' ');
  const first_name: string = full_name[0];
  const last_name: string = full_name.length == 1 ? '' : full_name[full_name.length-1] ;

  let middle_name: string = '' ;
   if(full_name.length >= 3){
   for (let index = 1; index < full_name.length-1; index++) {
     middle_name = middle_name + full_name[index];
   }
   }
  return {first_name, middle_name, last_name}
};
const services = {
      addUserEmailPattern: async(req: any, res: any, next:any)=> {
        const {first_name, middle_name, last_name} = await splitSubnamesFromFullname(req.body['full_name'])
        const email_parts: string = req.body['email'].trim().split('@')

        const first_name_reg:any = new RegExp(`${first_name}`,'gi');
        const last_name_reg:any = new RegExp(`${last_name}`,'gi');
        const mid_name_reg:any = new RegExp(`${middle_name}`,'gi');
        
        let email_pattern:string = email_parts[0].replace(first_name_reg,'{fn}')
        email_pattern =  middle_name ? email_pattern.replace(mid_name_reg,'{mn}') : email_pattern;
        email_pattern = last_name ? email_pattern.replace(last_name_reg,'{ln}') : email_pattern;
        email_pattern += `@${email_parts[1].toLowerCase()}`;
        console.log(email_pattern)
       const emailPattern = await EmailPattern.findOne({email_pattern});
       if(emailPattern){
         emailPattern['count']++;
         await emailPattern.save();
       }else{
        await EmailPattern.create({email_pattern, count: 1});
       }

       return res.send(`successfully loaded to db`);
      },
      getDomainEmail: async(req: any, res: any, next:any)=> {
        const full_name: any = req.body['full_name'].trim().split(' ');
        const first_name: string = full_name[0];
        let last_name: string = full_name.length == 1 ? '' : full_name[full_name.length-1] ;
        let middle_name: string = '' ;
         if(full_name.length >= 3){
         for (let index = 1; index < full_name.length-1; index++) {
           middle_name = middle_name + full_name[index];
         }
         }
        const domain: string = `@${req.body['domain'].trim()}`;
        const email_pattern: any = await EmailPattern.findOne({email_pattern: {$regex: domain, $options: 'i'}}).sort({count : -1}).limit(1);
        if(!email_pattern){
          return res.send('no pattern avaiable for the domain')
        }
        let user_email:string = email_pattern['email_pattern'].replace(/{fn}/g, first_name)
        user_email = middle_name ? user_email.replace(/{mn}/g,  middle_name) : user_email;
        user_email = last_name ? user_email.replace(/{ln}/g,last_name) : user_email;
        return res.send(user_email);
      }
}

export default services;
