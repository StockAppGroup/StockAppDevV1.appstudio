
jmbValue.onclick=function(){
  jmbValue.value = "AAPL"
}

StockScreen.onshow=function(){
   // let myurl = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/tops?token="+ apiKey+"&symbols=" + iptTicker.value;
    let myurl = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+iptTicker.value+"/company?token="+apiKey;
    let myurl1 = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+iptTicker.value+"/quote?token="+apiKey;
    $.ajax({
            url: myurl1,
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful

            
            jmbValue.header = data.companyName
            }
            
         });
    $.ajax({
            url: myurl1,
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful

            console.log(data)
            lblPrice.value = data.latestPrice
            alertPrice.value = data.changePercent
            
            /*
            if (alertPrice.value >0)
              alertPrice.appearance = "success"
            else (alertPrice.value <0)
              alertPrice.appearance = "warning"
            */
            
            
            
            
            
            
            }
            //GET /stock/{symbol}/quote
         });
         
}
