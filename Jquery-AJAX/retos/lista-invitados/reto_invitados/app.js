var source = $('#template_invited').html();
var template = Handlebars.compile(source);


$('.form-horizontal').on('submit', function(e){
  e.preventDefault();

  var guest = {name: $('#first-name').val(),
                 lastName: $('#last-name').val(),
                 mobileNumber: $('#mobile-number').val(),
                 status:false
  };

  if ($('#confirmed').is(':checked')){
    guest.status = true;
  }

  var html = template(guest);
  $('tbody').append(html);
  $('#new-guest').modal('hide');
  $("#new-guest form")[0].reset(); //jquery
  //this.reset();  igual a 21 pero mas eficiente js puro
});

//debugger para 

/*$("#new-guest").on("hidden.bs.modal", function(){
     /*$('#first-name').val("");
     $('#last-name').val("");
     $('#mobile-number').val("");
     $('#confirmed').prop('checked',false);
     
});*/


