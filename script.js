


$("button").click(function(){
    $.ajax({
        url: 'http://localhost:8000/countries',
        success: function(data, statuts, response) {
            
        

            
            $('#country').html(data[0]);
            $('#country1').html(data[1]);
            $('#country2').html(data[2]);
            $('#country3').html(data[3]);
            $('#country4').html(data[4]);
            
            
            
            
            
        }
    });
    

   });