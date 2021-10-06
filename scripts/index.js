const selectLocationButton = document.querySelector('.search-bar__button_position_first'); // выбираем в проекте класс кнопки "Выбрать город";
const selectSheduleButton = document.querySelector('.search-bar__button_position_second'); // выбираем в проекте класс кнопки "Выбрать график работы";
const selectWorkTimeButton = document.querySelector('.search-bar__button_position_third'); // выбираем в проекте класс кнопки "Выбрать занятость";
const selectWorkExperienceButton = document.querySelector('.search-bar__button_position_fourth'); // выбираем в проекте класс кнопки "Выбрать стаж работы";
const selectPaymentButton = document.querySelector('.search-bar__button_position_fifth'); // выбираем в проекте класс кнопки "Выбрать размер оплаты";
const searchButton = document.querySelector('.search-bar__search-button');


function handlePushingFilterButton(item) { // объявляем функцию с аргументами, реализующую открытие/закрытие меню кнопки фильтра;
  item.classList.toggle('search-bar__button_active');
}


selectLocationButton.addEventListener('click', () => handlePushingFilterButton(selectLocationButton));
selectSheduleButton.addEventListener('click', () => handlePushingFilterButton(selectSheduleButton));
selectWorkTimeButton.addEventListener('click', () => handlePushingFilterButton(selectWorkTimeButton));
selectWorkExperienceButton.addEventListener('click', () => handlePushingFilterButton(selectWorkExperienceButton));
selectPaymentButton.addEventListener('click', () => handlePushingFilterButton(selectPaymentButton));

