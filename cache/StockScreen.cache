
jmbValue.onclick=function(){
  DataGrid.show()
  newsGrid.show()
}

StockScreen.onshow=function(){
    let myurl2 = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+iptTicker.value+"/company?token="+apiKey;
    let myurl = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+iptTicker.value+"/earnings/1/actualEPS?token="+apiKey;
    let myurl1 = "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/stable/stock/"+iptTicker.value+"/quote?token="+apiKey;
   
   $.ajax({
            url: myurl1,
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful

            console.log(data)
            jmbValue.header = data.companyName
            lblPrice.value = data.latestPrice
            let percentChange = data.changePercent*100
            let percent = Math.round(percentChange*100)/100
            alertPrice.value = (percent)+"%"
            
            /* Not working yet
            if (alertPrice.value >0)
              alertPrice.appearance = "success"
            else (alertPrice.value <0)
              alertPrice.appearance = "warning"
            */
            
            marketCap.value= data.marketCap
            pe.value= "PE:   "+data.peRatio
            week52High.value="52 Week High:   "+data.week52High
            week52Low.value="52 Week Low:   "+data.week52Low
            ytdChange.value="YTD Change:   "+(data.ytdChange*100) +"%"
            
            
            }
            //GET /stock/{symbol}/quote
         });
      $.ajax({
            url: myurl,
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful
            
            eps.value = data
            
            }   
         
         
         // /stock/aapl/earnings/1/actualEPS
          });
      $.ajax({
            url: myurl2,
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful
            
            jmbValue.value = data.description
            
            }   
         
         
         // /stock/aapl/earnings/1/actualEPS
          });    
}
