import { FormControl } from "@angular/forms";

export class emailDomainmatch {

    static matchdomainemail (control: FormControl){
        let email = control.value.email; 
        if (email && email.indexOf("@") != -1) { 
          let [_, domain] = email.split("@"); 
          if (domain === "cloudmatic.com") { 
            return null;
          }
          control.get('email').setErrors({ hamza: true });
        }
      }}