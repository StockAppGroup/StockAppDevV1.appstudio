

btnSubmitStock.onclick=function(){
    let myurl = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/tops?token=pk_9a389ccddf364770a78c9a3ce53c00e2&symbols=" + inptStock.value;

    $.ajax({
            url: myurl,
            //headers: {
            //'Authorization':'Bearer pk_9a389ccddf364770a78c9a3ce53c00e2',},
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful
               
            console.log(data[0].symbol)
            }
         }); 

}
