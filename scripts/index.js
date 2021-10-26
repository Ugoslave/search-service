const selectLocationButton = document.querySelector('.search-bar__button_position_first'); // выбираем в проекте класс кнопки "Выбрать город";
const selectSheduleButton = document.querySelector('.search-bar__button_position_second'); // выбираем в проекте класс кнопки "Выбрать график работы";
const selectWorkTimeButton = document.querySelector('.search-bar__button_position_third'); // выбираем в проекте класс кнопки "Выбрать занятость";
const selectWorkExperienceButton = document.querySelector('.search-bar__button_position_fourth'); // выбираем в проекте класс кнопки "Выбрать стаж работы";
const selectPaymentButton = document.querySelector('.search-bar__button_position_fifth'); // выбираем в проекте класс кнопки "Выбрать размер оплаты";
const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона карточки;
const cardsContainer = document.querySelector('.vacancies__list');
const cardDescriptionLogoCompany = document.querySelector('.vacancies__logo_place_description');
const cardDescriptionJobTitle = document.querySelector('.vacancies__job-name_place_description');
const cardDescriptionNameCompany = document.querySelector('.vacancies__company-name_place_description');
const cardDescriptionLocation = document.querySelector('.vacancies__company-location_place_description');
const cardDescriptionPayment = document.querySelector('.vacancies__payment');
const cardDescriptionFirstText = document.querySelector('.vacancies__text_position_first');
const cardDescriptionSecondText = document.querySelector('.vacancies__text_position_second');
const cardDescriptionThirdText = document.querySelector('.vacancies__text_position_third');
const cardDescriptionFourthText = document.querySelector('.vacancies__text_position_fourth');
const cardDescriptionSkillList = document.querySelector('.vacancies__list-name');
const cardDescriptionHardSkillList = document.querySelector('.vacancies__list-name_position_second');
const cardDescriptionConditionsList = document.querySelector('.vacancies__list-name_position_third');
const cardDescriptionSkillOne = document.querySelector('.vacancies__list-item_position_first');
const cardDescriptionSkillTwo = document.querySelector('.vacancies__list-item_position_second');
const cardDescriptionSkillThree = document.querySelector('.vacancies__list-item_position_third');
const cardDescriptionSkillFour = document.querySelector('.vacancies__list-item_position_fourth');
const cardDescriptionHardSkillOne = document.querySelector('.vacancies__list-item_order_first');
const cardDescriptionHardSkillTwo = document.querySelector('.vacancies__list-item_order_second');
const cardDescriptionHardSkillThree = document.querySelector('.vacancies__list-item_order_third');
const cardDescriptionHardSkillFour = document.querySelector('.vacancies__list-item_order_fourth');
const cardDescriptionHardSkillFive = document.querySelector('.vacancies__list-item_order_fifth');
const cardDescriptionHardSkillSix = document.querySelector('.vacancies__list-item_order_sixth');
const cardDescriptionHardSkillSeven = document.querySelector('.vacancies__list-item_order_seventh');
const cardDescriptionConditionOne = document.querySelector('.vacancies__list-item_last_first');
const cardDescriptionConditionTwo = document.querySelector('.vacancies__list-item_last_second');
const cardDescriptionConditionThree = document.querySelector('.vacancies__list-item_last_three');
const cardDescriptionConditionFour = document.querySelector('.vacancies__list-item_last_four');
const cardDescriptionLastParagrathOne = document.querySelector('.vacancies__text_last_one');
const cardDescriptionLastParagrathTwo = document.querySelector('.vacancies__text_last_two');





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
    seventhSkill: 'TypeScript',
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




const cardDescription = [
  {
    name: 'Интернет Люди',
    payment: 'От 150 000 до 300 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'И если у Вас есть:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 2 лет;',
    skillTwo: 'опыт коммерческой разработки на React от 2 лет;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с любым сборщиком (webpack, gulp и т.д.).',
    fourthParagrath: '…то Вы именно тот, кого мы ищем!',
    hardSkillsTitle: 'Обязательные знания:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в столицу Латвии с помощью в оформлении всех необходимых документов;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'GOOD CALL DEVELOPMENT',
    payment: 'От 280 000 до 400 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой дизайнерских сайтов, и т.д. и т.п.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам необходимо иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 2 лет;',
    skillTwo: 'опыт коммерческой разработки на React от 2 лет;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с любым сборщиком (webpack, gulp и т.д.).',
    fourthParagrath: '',
    hardSkillsTitle: 'Обязательные знания:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в столицу;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'Winfinity',
    payment: 'От 100 000 до 200 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам нужно иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 1 года;',
    skillTwo: 'опыт коммерческой разработки на React от 1 года;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с webpack',
    fourthParagrath: '…остальному - научим!',
    hardSkillsTitle: 'Необходимо знание следующих стеков:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в любой из крупнейших городов России;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'Diagnocat',
    payment: 'От 200 000 до 250 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам нужно иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 1 года;',
    skillTwo: 'опыт коммерческой разработки на React от 1 года;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с webpack',
    fourthParagrath: '…остальному - научим!',
    hardSkillsTitle: 'Необходимо знание следующих стеков:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в любой из крупнейших городов России;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'IT-Port',
    payment: 'От 90 000 до 130 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам нужно иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 1 года;',
    skillTwo: 'опыт коммерческой разработки на React от 1 года;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с webpack',
    fourthParagrath: '…остальному - научим!',
    hardSkillsTitle: 'Необходимо знание следующих стеков:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в любой из крупнейших городов России;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'Smart Develop Inc',
    payment: 'От 450 000 до 550 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам нужно иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 5 лет;',
    skillTwo: 'опыт коммерческой разработки на React от 3 лет;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с webpack',
    fourthParagrath: '…остальному - научим!',
    hardSkillsTitle: 'Необходимо знание следующих стеков:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в Мельбурн (Австралия) или Осло (Португалия) с оформлением документов;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
  {
    name: 'Digital Solutions',
    payment: 'От 70 000 до 90 000 руб.',
    firstParagrath: 'Мы занимаемся разработкой инновационных решений в области цифрового контента.',
    secondParagrath: 'Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.',
    thirdParagrath: 'Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!',
    skillsTitle: 'Вам нужно иметь:',
    skillOne: 'опыт коммерческой разработки на JavaScript от 2 лет;',
    skillTwo: 'опыт коммерческой разработки на React от 2 лет;',
    skillThree: 'опыт работы в команде с git;',
    skillFour: 'опыт работы с webpack',
    fourthParagrath: '…остальному - научим!',
    hardSkillsTitle: 'Необходимо знание следующих стеков:',
    conditionsListTitle: 'После испытательного срока мы предлагаем:',
    conditionOne: 'возможную релокацию в столицу;',
    conditionTwo: 'бесплатную стоянку рядом с современным офисом в центре города;',
    conditionThree: 'медицинскую страховку;',
    conditionFour: 'абонемент в спортивный зал.',
    fifthParagrath: 'Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.',
    sixthParagrath: 'Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.',
  },
]










function handlePushingFilterButton(item) { // объявляем функцию с аргументами, реализующую открытие/закрытие меню кнопки фильтра;
  item.classList.toggle('search-bar__button_active');
}


function handleCardClick(evt) {
  cardImage = evt.target.closest('.vacancies__element');
  cardTitle = cardImage.querySelector('.vacancies__company-name');
  cardLogo = cardImage.querySelector('.vacancies__logo');
  cardJobName = cardImage.querySelector('.vacancies__job-name');
  cardLocation = cardImage.querySelector('.vacancies__company-location');


  cardDescriptionLogoCompany.src = cardLogo.src;
  cardDescriptionJobTitle.textContent = cardJobName.textContent;
  cardDescriptionNameCompany.textContent = cardTitle.textContent;
  cardDescriptionLocation.textContent = cardLocation.textContent;

}


function createCard(item) {
  const card = templateElement.content.cloneNode(true); // клонируем содержимое шаблона в проекте;

  const cardImage = card.querySelector('.vacancies__element');

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


  cardImage.addEventListener('click', handleCardClick);

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



