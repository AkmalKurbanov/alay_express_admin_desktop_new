document.addEventListener('DOMContentLoaded', () => {
  // Получаем все дроп-зоны
  const dropZones = document.querySelectorAll('.drop-zone');

  dropZones.forEach(zone => {
    // Находим элементы внутри зоны
    const controls = zone.querySelector('.controls');
    const deleteButton = controls.querySelector('.delete-btn');
    const changeButton = controls.querySelector('.change-btn');
    const imgContainer = zone.querySelector('.drop-zone__img');
    const imgElement = imgContainer.querySelector('img');
    const inputElement = imgContainer.querySelector('input');
    const placeholder = zone.querySelector('p');

    // Скрываем элементы по умолчанию
    imgContainer.style.display = 'none';
    controls.style.display = 'none';

    // Создаем скрытый input[type="file"] для выбора файлов
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Разрешаем только изображения
    fileInput.style.display = 'none'; // Скрываем input
    zone.appendChild(fileInput); // Добавляем input в DOM

    // Перетаскивание над зоной
    zone.addEventListener('dragover', function (e) {
      e.preventDefault(); // Разрешаем сброс
      this.classList.add('over'); // Подсвечиваем текущую зону
    });

    // Покидаем зону
    zone.addEventListener('dragleave', function () {
      this.classList.remove('over'); // Убираем подсветку
    });

    // Сброс файлов
    zone.addEventListener('drop', function (e) {
      e.preventDefault();
      this.classList.remove('over'); // Убираем подсветку

      const files = e.dataTransfer.files; // Получаем файлы из события
      handleFile(files[0], controls, placeholder, imgContainer, imgElement, inputElement); // Обрабатываем только первый файл
    });

    // Клик по зоне открывает выбор файла
    zone.addEventListener('click', function () {
      fileInput.click(); // Открываем диалог выбора файла
    });

    // Обработка выбранного через input файла
    fileInput.addEventListener('change', function () {
      const file = fileInput.files[0]; // Получаем выбранный файл
      handleFile(file, controls, placeholder, imgContainer, imgElement, inputElement);
    });

    // Обработка кнопки "Удалить"
    deleteButton.addEventListener('click', function (e) {
      e.stopPropagation(); // Предотвращаем всплытие
      resetZone(controls, placeholder, imgContainer, imgElement, inputElement);
    });

    // Обработка кнопки "Изменить"
    changeButton.addEventListener('click', function (e) {
      e.stopPropagation(); // Предотвращаем всплытие
      fileInput.click(); // Открываем диалог выбора файла
    });
  });

  // Функция обработки файла
  function handleFile(file, controls, placeholder, imgContainer, imgElement, inputElement) {
    // Проверяем, является ли файл изображением
    if (!file.type.startsWith('image/')) {
      alert('Пожалуйста, выберите изображение.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      // Устанавливаем путь к изображению и в input
      imgElement.src = e.target.result;
      imgElement.alt = file.name;
      inputElement.value = file.name;

      // Показываем контейнер для изображения и скрываем placeholder
      imgContainer.style.display = 'block';
      placeholder.style.display = 'none';

      // Показываем кнопки управления
      controls.style.display = 'flex';
    };
    reader.readAsDataURL(file); // Читаем файл как Data URL
  }

  // Функция сброса зоны в исходное состояние
  function resetZone(controls, placeholder, imgContainer, imgElement, inputElement) {
    // Сбрасываем изображение и input
    imgElement.src = '';
    imgElement.alt = '';
    inputElement.value = '';

    // Скрываем контейнер для изображения и показываем placeholder
    imgContainer.style.display = 'none';
    placeholder.style.display = 'block';

    // Скрываем кнопки управления
    controls.style.display = 'none';
  }
});
