function ageCalculator(data) {  
    var userinput = data;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      console.log("**Choose a date please!");    
      return false;   
    } else {  
      
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();  
        console.log(month_diff);

        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
        console.log(age_dt);

        //extract year from date      
        var year = age_dt.getUTCFullYear();  
        console.log(year);

        //now calculate the age of the user  
        var age = Math.abs(year - 2021);  
        console.log(age);
        
        
        //display the calculated age  
        return age  
    }
}  
let result = ageCalculator('1989-10-10');
// console.log(result);

// new Date().toISOString().split("T")[0];
// console.log(new Date());
// console.log(new Date().toISOString().split("T"));

// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }
    
// console.log(validateEmail('anystring@anystring.anystring'));

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("email valido");
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido </font>";
  alert("E-mail invalido");
  }
  }
  