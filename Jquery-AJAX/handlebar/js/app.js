var source = $('#template_pais').html();
var template = Handlebars.compile(source);


//function helper handlebar
Handlebars.registerHelper('enumeracion', function(pvalor, operador,svalor){

  pvalor= parseFloat(pvalor);
  svalor= parseFloat(svalor);

  var operadores={
    '+': pvalor + svalor,
    '*': pvalor * svalor,
    '-': pvalor - svalor
  }
  return operadores[operador];
});


//setear un objeto
/*var personas =[
  {'nombre':"ALexis",'apellido':"Galvis",'email':"hermesagm@gmail.com"},
  {'nombre':"HErmes",'apellido':"MEjía",'email':"sauromhagm@hotmail.com"},
  {'nombre':"Richard",'apellido':"Galvis",'email':"richardo@gmail.com"}
  ];
*/

$.ajax({
  url: 'https://restcountries-v1.p.mashape.com/all',
  type: 'GET',
  dataType: 'json',
  headers: {'X-Mashape-Key': '6nYVgLvA8ImshSt5ER6FOJnWRGb9p1itcH9jsnAzmJW27mwoOT'}
}).done(function(data){
  var html = template({'country' : data});
  $('.container').html(html);
});


