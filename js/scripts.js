$(document).ready(function() {
  $('#burgerOrder').submit(function(event) {
    event.preventDefault();

    $('#burgerOrder').hide();
    $('.result').show();


    $('input:checkbox[name=proteinType]:checked').each(function() {
      var proteinType = $(this).val();
      $('#finalOrder').append('<li>'+proteinType+'</li>');


    });


    $('input:checkbox[name=bunType]:checked').each(function() {
      var bunType = $(this).val();
      $('#finalOrder').append('<li>'+bunType+'</li>');
      console.log(bunType);
    });

    $('input:checkbox[name=toppings]:checked').each(function() {
      var toppings = $(this).val();
      $('#finalOrder').append('<li>'+toppings+'</li>');

    });




  });
});
