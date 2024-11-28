$('.show-pass-js').on('click', function () {
  const input = $(this).parent().find('input');
  const currentType = input.attr('type');

  
  const newType = currentType === 'password' ? 'text' : 'password';
  input.attr('type', newType);

  
  $(this).toggleClass('active'); 
});
