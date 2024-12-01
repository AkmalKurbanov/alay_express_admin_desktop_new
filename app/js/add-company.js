document.addEventListener('DOMContentLoaded', () => {
  // Получаем все радиокнопки
  const radioButtons = document.querySelectorAll('input[type="radio"][name="company"]');

  radioButtons.forEach(radio => {
    // Добавляем обработчик события change для каждой радиокнопки
    radio.addEventListener('change', function () {
      // Убираем класс active у всех .added-company
      document.querySelectorAll('.added-company').forEach(company => {
        company.classList.remove('active');
      });

      // Добавляем класс active к родительскому элементу .added-company выбранной радиокнопки
      const parentCompany = this.closest('.added-company');
      if (parentCompany) {
        parentCompany.classList.add('active');
      }
    });
  });
});


