
$('button').on("click", function(){
 $.ajax({
   url: 'https://s3.amazonaws.com/makeitreal/countries.json',
   dataType: 'json'
 })
 .done(function(countries) {
   var source = $("#table-template").html();
   var template = Handlebars.compile(source);
   var html = template({'countries' : countries});
   $('.wrapper').append(html);
   $('button').hide();
 });
});
