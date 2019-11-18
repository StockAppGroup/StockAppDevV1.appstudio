let apiKey = "pk_9a389ccddf364770a78c9a3ce53c00e2"

btnSubmitStock.onclick=function(){
    let myurl = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+inptStock.value+"/company?token="+apiKey;

    $.ajax({
            url: myurl,
            //headers: {
            //'Authorization':'Bearer sk_59c02c88a7614d68b2d11f548311b6f9',},
            method: 'GET',
            dataType: 'json',
            success: function(data){ // this function runs with the returned data if trip is successful
            let totalresults = data.total
            if (totalresults > 0){
            console.log(data)
            }
            else 
              console.log("No businesses found")
              }
         }); 

}
