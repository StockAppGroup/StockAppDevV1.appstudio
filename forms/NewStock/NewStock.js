//Adding stock to portfolio
/*
btnNewStock.onclick=function(){
    let stockTicker = inptTicker.value
    let queryStock =  "INSERT INTO stocks (ticker,user_id) VALUES ('" + stockTicker + "', '" + currentUserID + "')"
    req5 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bse29687&pass=BIA375pass&database=375groupa8&query=" +  queryStock)  
      if (req5.status == 200) { //everything worked.
          ChangeForm(Home)
        } else (
          Label2.style.display = "block"  // none to hide
                            Label2.value = "Error Connection Not Made: " + req5.status + " readystate " + req5.readyState + " status text " + req5.statusText;
          }
}
*/