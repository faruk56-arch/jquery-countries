


$("button").click(function(){
    $.ajax({
        url: 'http://localhost:8000/countries',
        success: function(data, statuts, response) {
            
        
            // $('p').html(data)
            $('ul').html(data);


            
            
            
            
            
            
        }
    });
    

   });