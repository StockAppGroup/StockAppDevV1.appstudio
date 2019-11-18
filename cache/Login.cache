//DATABASE NEEDS TO BE SETUP BEFORE ANY OF THIS CAN BE COMPLETED
//THIS IS JUST THE BASE CODE THAT NEEDS TO BE EDITED
btnRegister.onclick=function(){
  ChangeForm(Register)
}

btnLogin.onclick=function(){
req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUsername.value + "&j_password=" + inptPassword.value);
  //req1 = Ajax("https://otis.creighton.edu/authLDAP_3.php", "POST", "j_username=" + TextBox1.value + "&j_password=" + PasswordInput1.value);
    if (req1.status == 200) { //everything worked.
        //1 good 0 bad
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}
