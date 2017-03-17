var countries = [
  { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
  { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
  { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
  { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
];

// escribe tu código acá
// 

var source = $("#table-template").html();
var template = Handlebars.compile(source);
var html = template({'countries' : countries});



$('button').on("click", function(){
  $(this).hide();
  $('.wrapper').append(html);
});
