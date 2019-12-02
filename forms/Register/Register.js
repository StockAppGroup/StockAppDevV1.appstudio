//User registration process
btnSignUp.onclick=function(){
  let newUser = inptSignUpUser.value
  let newPass = inptSignUpPass.value
  let newPhone = inptPhone.value
  let verifyPass = inptVerify.value
  let queryUserExist = "SELECT user_name FROM user WHERE user_name = " + '"' + newUser + '"'
  let queryPhoneExist = "SELECT phone_number FROM user WHERE phone_number = " + '"' + newPhone + '"'
  let queryNew = "INSERT INTO user (user_name,password,phone_number) VALUES ('" + newUser + "', '" + newPass + "', '" + newPhone + "')"
       req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=375groupa8&query=" + queryUserExist)   
          if (req2.status == 200) { //everything worked.
              results1 = JSON.parse(req2.responseText)
              if (results1.length > 0) {
                lblVerified.value = "Please choose another username"
              } else {
                    if (newPass !== verifyPass) {
                    lblVerified.value = "Verified password needs to match"
                    } else {
                                 req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=375groupa8&query=" + queryPhoneExist)   
                                    if (req3.status == 200) { //everything worked.
                                      results2 = JSON.parse(req3.responseText)
                                        if (results2.length > 0) {
                                        lblVerified.value = "A user is already registered under this phone number"
                                        } else {
                                              req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=375groupa8&query=" + queryNew)  
                                                 if (req4.status == 200) { //everything worked.
                                                  ChangeForm(Home)
                                                          } else {
                                                            lblVerified.style.display = "block"  // none to hide
                                                            lblVerified.value = "Error Connection Not Made: " + req4.status + " readystate " + req4.readyState + " status text " + req4.statusText;
                                                            }
                                                }
                                            } else {
                                              lblVerified.style.display = "block"  // none to hide
                                              lblVerified.value = "Error Connection Not Made: " + req3.status + " readystate " + req3.readyState + " status text " + req3.statusText;
                                              }
                              }
                       }
                          } else {
                            lblVerified.style.display = "block"  // none to hide
                            lblVerified.value = "Error Connection Not Made: " + req2.status + " readystate " + req2.readyState + " status text " + req2.statusText;
                            }
}

btnBack.onclick=function(){
  ChangeForm(Login)
}
