$('.show-pass-js').on('click', function () {
  const input = $(this).parent().find('input');
  const currentType = input.attr('type');

  
  const newType = currentType === 'password' ? 'text' : 'password';
  input.attr('type', newType);

  
  $(this).toggleClass('active'); 
});


$(document).ready(function () {
  // Открытие/закрытие dropdown по клику на .select-trigger-js
  $('.select-trigger-js').on('click', function (e) {
    e.stopPropagation(); // Останавливаем всплытие события
    const parent = $(this).closest('.select'); // Определяем родительский элемент
    const dropdown = parent.find('.select__dropdown'); // Находим dropdown внутри этого родителя

    $('.select__dropdown').not(dropdown).removeClass('active'); // Закрываем другие dropdown
    dropdown.toggleClass('active'); // Открываем/закрываем текущий dropdown
  });

  // Закрытие dropdown при клике вне его области
  $(document).on('click', function () {
    $('.select__dropdown').removeClass('active'); // Убираем класс "active" у всех dropdown
  });

  // Остановка закрытия при клике на самом dropdown
  $('.select__dropdown').on('click', function (e) {
    e.stopPropagation(); // Останавливаем всплытие события
  });

  // Закрытие dropdown при клике на .select__option
  $('.select__option').on('click', function () {
    const parent = $(this).closest('.select'); // Определяем родительский элемент
    const dropdown = parent.find('.select__dropdown'); // Находим dropdown внутри этого родителя
    dropdown.removeClass('active'); // Закрываем dropdown
  });
});


