//User registration process
btnSignUp.onclick=function(){
  let newUser = inptSignUpUser.value
  let newPass = inptSignUpPass.value
  let newPhone = inptPhone.value
  let verifyPass = inptVerify
  let queryUserExist = "SELECT user_name FROM user WHERE user_name = " + ' " ' + newUser + ' " '
  let queryPhoneExist = "SELECT phone_number FROM user WHERE phone_number = " + ' " ' + newPhone + ' " '
  let queryNew = "INSERT INTO user (user_name,password,phone_number) VALUES (' " + newUser + " ', ' " + newPass + " ', ' " + newPhone + " ') "

 /*Algorithm:
      1) Check username to see if it exists (req1 = Ajax)
      2) If the results1 array > 0: lblVerified.value = "Please pick a different username"
      3) else: if statement checking if inptSignUpPass = inptVerify
      4) if inptSignUpPass =/= inptVerify: lblVerified.value = "Passwords do not match"
      5) else: if statement using queryPhoneExist (req2 = Ajax)
      6) if results2 array > 0: lblVerified.value = "User already registered under this phone number"
      7) else: insert the data using queryNew (req3 = Ajax)
      8) ChangeForm(Home)
 */     
      
}


btnBack.onclick=function(){
  ChangeForm(Login)
}
