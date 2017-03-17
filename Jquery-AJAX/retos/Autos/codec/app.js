var showCars = function(){
  var template = Handlebars.compile($('#cars-template').html());
  
  $.get('https://s3.amazonaws.com/makeitreal/cars.json', function(data) {
    $('#load-cars').hide();
    $('.cars').append(template({ cars: data }));
  });


  
}

$('button').on('click',function(){
  showCars();
});