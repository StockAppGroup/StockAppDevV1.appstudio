//User login process
btnRegister.onclick=function(){
  ChangeForm(Register)
}

btnLogin.onclick=function(){
    let checkPass = inptPassword.value
    let checkUser = inptUsername.value
    let query = "SELECT user_name, password FROM user WHERE user_name = " + ' " ' + checkUser + ' " ' + " AND password = " + ' " ' + checkPass + ' " '
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=375groupa8&query=" + query) = ""    
    results = JSON.parse(req1)
    if (req1.status == 200) { //everything worked.
        if (results.length = 0) { //there is no user or the password was entered incorrectly
            lblResult.value = "Incorrect username or password"
          } else {
              ChangeForm(Home)
              }
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
   
    
}
