

$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//X是刪除
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {  //span's parent
    $(this).remove();  //li element
  });
  e.stopPropagation();
})

$('input[type="text"]').keypress(function(e) {
  if(e.which === 13) {
    var todoText = $(this).val();
    $(this).val('');
    $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + '</li>');
  }
});
