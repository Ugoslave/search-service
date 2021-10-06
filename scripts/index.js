const selectLocationButton = document.querySelector('.search-bar__button_position_first'); // выбираем в проекте класс кнопки "Выбрать город";
const selectSheduleButton = document.querySelector('.search-bar__button_position_second'); // выбираем в проекте класс кнопки "Выбрать график работы";
const selectWorkTimeButton = document.querySelector('.search-bar__button_position_third'); // выбираем в проекте класс кнопки "Выбрать занятость";
const selectWorkExperienceButton = document.querySelector('.search-bar__button_position_fourth'); // выбираем в проекте класс кнопки "Выбрать стаж работы";
const selectPaymentButton = document.querySelector('.search-bar__button_position_fifth'); // выбираем в проекте класс кнопки "Выбрать размер оплаты";
const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона карточки;
const cardsContainer = document.querySelector('.vacancies__list');


const initialCards = [
  {
    title: 'Front-end Разработчик',
    name: 'Интернет Люди',
    location: 'Москва',
    link: 'img/company-logo-1.svg',
    date: '29/03/2021',
    firstSkill: 'JQuery',
    secondSkill: 'JavaScript',
    thirdSkill: 'CSS3',
    fourthSkill: 'React',
    fifthSkill: 'Git',
    sixthSkill: 'Vue',
    seventhSkill: 'Flexbox',
  },
  {
    title: 'React Developer (Middle/Senior)',
    name: 'GOOD CALL DEVELOPMENT',
    location: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1516661148962-32f91eab6bf3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4OXxxUFlzRHp2Sk9ZY3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    date: '15/04/2021',
    firstSkill: 'ReactHooks',
    secondSkill: 'JavaScript',
    thirdSkill: 'JSX',
    fourthSkill: 'React',
    fifthSkill: 'Git',
    sixthSkill: 'Node',
    seventhSkill: 'WebPack',
  },
  {
    title: 'Frontend developer (React)',
    name: 'Winfinity',
    location: 'Москва',
    link: 'img/company-logo-3.svg',
    date: '11/05/2021',
    firstSkill: 'ReactHooks',
    secondSkill: 'ReactDOM',
    thirdSkill: 'JSX',
    fourthSkill: 'React',
    fifthSkill: 'Git',
    sixthSkill: 'Node',
    seventhSkill: 'JS ES6',
  },
  {
    title: 'Frontend developer',
    name: 'Diagnocat',
    location: 'Калининград',
    link: 'img/company-logo-4.svg',
    date: '19/04/2021',
    firstSkill: 'CSS Grid',
    secondSkill: 'Vue',
    thirdSkill: 'CSS Flexbox',
    fourthSkill: 'JS ES6',
    fifthSkill: 'Git',
    sixthSkill: 'Node',
    seventhSkill: 'WebPack',
  },
  {
    title: 'Frontend developer (Vue, React)',
    name: 'IT-Port',
    location: 'Нижний Новгород',
    link: 'https://images.unsplash.com/photo-1632249500719-e27aea76e581?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8cVBZc0R6dkpPWWN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    date: '09/06/2021',
    firstSkill: 'React',
    secondSkill: 'Vue JS',
    thirdSkill: 'Flexbox',
    fourthSkill: 'CSS Grid',
    fifthSkill: 'GitLab',
    sixthSkill: 'Node',
    seventhSkill: 'WebPack',
  },
  {
    title: 'Full Stack developer',
    name: 'Smart Develop Inc',
    location: 'Москва',
    link: 'https://images.unsplash.com/photo-1632670344715-f69c3071e7a8?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHxxUFlzRHp2Sk9ZY3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    date: '02/05/2021',
    firstSkill: 'React',
    secondSkill: 'Redux',
    thirdSkill: 'Grid',
    fourthSkill: 'Express',
    fifthSkill: 'MongoDB',
    sixthSkill: 'Node',
    seventhSkill: 'WebPack',
  },
  {
    title: 'React developer',
    name: 'Digital Solutions',
    location: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1628126079087-b9d33217dff5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5OHxxUFlzRHp2Sk9ZY3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    date: '15/06/2021',
    firstSkill: 'React',
    secondSkill: 'Redux',
    thirdSkill: 'Grid',
    fourthSkill: 'JSX',
    fifthSkill: 'ReactHooks',
    sixthSkill: 'Node',
    seventhSkill: 'WebPack',
  },
]


function handlePushingFilterButton(item) { // объявляем функцию с аргументами, реализующую открытие/закрытие меню кнопки фильтра;
  item.classList.toggle('search-bar__button_active');
}


function createCard(item) {
  const card = templateElement.content.cloneNode(true); // клонируем содержимое шаблона в проекте;
  const cardTitle = card.querySelector('.vacancies__job-name');
  const cardNameCompany = card.querySelector('.vacancies__company-name');
  const cardLocation = card.querySelector('.vacancies__company-location');
  const cardLogoCompany = card.querySelector('.vacancies__logo');
  const cardLikeButton = card.querySelector('.vacancies__like-button');
  const cardDate = card.querySelector('.vacancies__job-date');
  const cardFirstSkill = card.querySelector('.vacancies__job-skill_order_first');
  const cardSecondSkill = card.querySelector('.vacancies__job-skill_order_second');
  const cardThirdSkill = card.querySelector('.vacancies__job-skill_order_third');
  const cardFourthSkill = card.querySelector('.vacancies__job-skill_order_fourth');
  const cardFifthSkill = card.querySelector('.vacancies__job-skill_order_fifth');
  const cardSixthSkill = card.querySelector('.vacancies__job-skill_order_sixth');
  const cardSeventhSkill = card.querySelector('.vacancies__job-skill_order_seventh');


  
  cardTitle.textContent = item.title;
  cardNameCompany.textContent = item.name;
  cardLocation.textContent = item.location;
  cardLogoCompany.src = item.link;
  cardLogoCompany.alt = item.name;
  cardDate.textContent = item.date;
  cardFirstSkill.textContent = item.firstSkill;
  cardSecondSkill.textContent = item.secondSkill;
  cardThirdSkill.textContent = item.thirdSkill;
  cardFourthSkill.textContent = item.fourthSkill;
  cardFifthSkill.textContent = item.fifthSkill;
  cardSixthSkill.textContent = item.sixthSkill;
  cardSeventhSkill.textContent = item.seventhSkill;


  return card;
}

function renderCards() {
  const cardList = initialCards.map(createCard);
  cardsContainer.append(...cardList);
}

renderCards();













selectLocationButton.addEventListener('click', () => handlePushingFilterButton(selectLocationButton));
selectSheduleButton.addEventListener('click', () => handlePushingFilterButton(selectSheduleButton));
selectWorkTimeButton.addEventListener('click', () => handlePushingFilterButton(selectWorkTimeButton));
selectWorkExperienceButton.addEventListener('click', () => handlePushingFilterButton(selectWorkExperienceButton));
selectPaymentButton.addEventListener('click', () => handlePushingFilterButton(selectPaymentButton));

