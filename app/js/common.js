$(function() {

  var lang_en = {"about.name": "Nikita Monastyrskyi",
  "about.vocaction": "Front-end Developer",
  "education": "Education",
  "basic.university2": "Kharkiv National  University of Arts",
  "basic.rank2": "Bachelor (Theatre department)",
  "basic.university1": "People's Ukranian Academy",
  "basic.rank1": "Bachelor (Buisness Administration department)",
  "course.name": "Harvard CS50 online-course",
  "course.vocation": "Introduction to computer science",
  "course.description1": "Linux terminal commands;",
  "course.description2": "<b>Searching and Sorting</b> ( Time complexity, Binary search, Bubble/Insertion/Merge/Selection Sort );",
  "course.description3": "<b>C language</b> ( Command-Line Arguements, Dynamic Memory Allocation, Pointers, Linked Lists, Hash Tables, Trees, etc );",
  "course.description4": "<b>SQL, Python, Flask</b>( microframework for Python );",
  "course.description5": "<b>HTML, CSS & JS</b>.",
  "skills.name": "Skills ",
  "skills.markup": "Markup skills",
  "skills.html": "HTML5/CSS3;",
  "skills.responsive": "Responsive, cross-browser, semantically markup;",
  "skills.mobile": "Mobile Friendly;",
  "skills.email": "Markup of emails;",
  "skills.sass": "CSS-preprocessor: Sass;",
  "skills.pug": "HTML-preprocessor: Pug( Jade );",
  "skills.gulp": "Gulp;",
  "skills.sublime ": "PhpStorm / Visual Studio Code / Sublime Text for editing code",
  "skills.programming": "Programming",
  "skills.js": "JS: ES6+, OOP, AJAX, JSON, working with arrays, strings, objects, events, dates, timers, Event object, closures, DOM, metrics, regular expressions;",
  "skills.jquery": "JQuery: manipulating page elements, work with events & animations, customization of modules and plugins;",
  "skills.gulp": "Gulp: projects building;",
  "skills.sql": "SQL",
  "skills.c" : "C: Working with variables, functions, command-line arguements, pointers, linked lists, hash tables, trees, dynamic memory allocation.",
  "experience.name" : "Experience",
  "experience.non-commercial" : "Non-commercial experience",
  "experience.commercial" : "Commercial experience",
  "experience.turnkey" : "Turnkey Website",
  "experience.scemantic" : "Semantic mockup;",
  "experience.bem" : "BEM css methodology;",
  "experience.perfomance": "Attention to page performance.",
  "freelance.date" : "October 2017 - April 2018",
  "bekey.date" : "April 2018 - Today",
  "bekey.info" : "Layout pages according to the provided PSD layout, edit existing pages; Adding and editing functionality of elements on the page. Create structured, cross-browser, testable and scalable code;Creation of new projects and work on existing projects",
  "interests": "Interests",
  "hobbies": "Interests & Hobbies",
  "books" : " Books",
  "travel": " Travel",
  "music" : " Music & Theatre",
  "photography": " Photography",
  "intelectual" : "Intelectual games",
  "bike": " Bike"};
  var lang_ru = {
  "about.name": "Никита Монастырский",
  "about.vocaction": "Front-end Developer",
  "education": "Образование",
  "basic.university2": "ХНУИ им. Котляревского",
  "basic.rank2": "Бакалавр (Театральный факультет)",
  "basic.university1": "ХГУ \"НУА\" ",
  "basic.rank1": "Бакалавр (Экономика предприятия)",
  "course.name": "Harvard CS50 online-course",
  "course.vocation": "Введение в информатику",
  "course.description1": "Команды терминала Linux;",
  "course.description2": "<b>Поиск и сортировка</b> ( Трудоемкость, Бинарный поиск, Сортировка Пузырьком/Вставкой/Слиянием/Выбором );",
  "course.description3": "<b>Язык Си</b> ( Аргументы командной строки, Динамическое выделение памяти, Указатели, Связанные списки, Hash таблицы, Деревья, и т.д );",
  "course.description4": "<b>SQL, Python, Flask</b>( микрофреймворк для Python );",
  "course.description5": "<b>HTML, CSS & JS</b>.",
  "skills.name": "Навыки",
  "skills.markup": "Навыки верстки",
  "skills.html": "HTML5/CSS3;",
  "skills.responsive": "Отзывчивая, кросс-браузерная, семантическая верстка;",
  "skills.mobile": "Mobile Friendly;",
  "skills.email": "Верстка электронных писем",
  "skills.sass": "CSS-препроцессор: Sass;",
  "skills.pug": "HTML-препроцессор: Pug( Jade );",
  "skills.gulp": "Gulp;",
  "skills.sublime": "PhpStorm / Visual Studio Code / Sublime Text для редактирования кода",
  "skills.programming": "Програмимрование",
  "skills.js": "  JS: ES6+, OOП, AJAX, JSON, Работа с массивами, строками, объектами, событиями, датами, таймерами, объектом Event, замыкания, DOM, метрики, регулярные выражения;",
  "skills.jquery": "JQuery: манипулирование элементами страницы, работа с событиями и анимациями, настройка модулей и плагинов",
  "skills.gulp": "Gulp: сборка, деплой проэкта;",
  "skills.sql": "SQL",
  "skills.c" : "Cи: работа с переменными, функциями, аргументами командной строки, указателями, связанные списки, хеш-таблицы, деревья, распределение динамической памяти.",
  "experience.name" : "Опыт",
  "experience.non-commercial" : "Некоммерческий опыт",
  "experience.commercial" : "Коммерческий опыт",
  "experience.turnkey" : "Сайт под ключ",
  "experience.semantic" : "Семантическая верстка;",
  "experience.bem" : "css методология БЭМ;",
  "experience.perfomance": "Особе внимание к производительности страницы.",
  "freelance.date" : "Октябрь 2017 - Апрель 2018",
  "bekey.date" : "Апрель 2018 - Настоящее время ",
  "bekey.info" : "Верстка странички в соответствии с предоставленным макетом PSD, редактировать существующие страницы; Добавление и редактирование функциональных возможностей элементов на странице. Создание структурированного, кросс-браузерного, тестируемого кода; Создание новых проектов и работа над существующими проектами.",
  "interests": "Интересы",
  "hobbies": " Интересы и Хобби",
  "books" : " Книги",
  "travel": " Путешествия",
  "music" : " Музыка и Театр",
  "photography": " Фотография",
  "intelectual" : " Интелектуальные игры",
  "bike": " Велосипед"};
  var lang_ua = {"about.name": "Микита Монастирський",
  "about.vocaction": "Front-end Developer",
  "education": "Освiта",
  "basic.university2": "ХНУМ iм. Котляревського",
  "basic.rank2": "Бакалавр (Театральний факультет)",
  "basic.university1": "ХГУ \"НУА\" ",
  "basic.rank1": "Бакалавр (Економiка пiдприємства)",
  "course.name": "Harvard CS50 online-course",
  "course.vocation": "Введення в інформатику",
  "course.description1": "Команди термінала Linux;",
  "course.description2": "<b>Пошук та сортування</b> ( Трудомісткість, Бінарний пошук, Сортування Бульбашкою/Вставкою/Злиттям/Вибором );",
  "course.description3": "<b>С</b> ( Аргумент командного рядка, Динамічне виділення пам'яті, Вказівники, пов'язані списки, Hash таблиці, Дерева, і т.д",
  "course.description4": "<b>SQL, Python, Flask</b>( мікрофреймворк для Python );",
  "course.description5": "<b>HTML, CSS & JS</b>.",
  "skills.name": "Навички",
  "skills.markup": "Навички верстки",
  "skills.html": "HTML5/CSS3;",
  "skills.responsive": "Чутлива, крос-браузерна, семантична верстка;",
  "skills.mobile": "Mobile Friendly;",
  "skills.email": "Верстка електронних писем",
  "skills.sass": "CSS-препроцесор: Sass;",
  "skills.pug": "HTML-препроцесор: Pug( Jade );",
  "skills.gulp": "Gulp;",
  "skills.sublime": "PhpStorm / Visual Studio Code / Sublime Text для редагування коду",
  "skills.programming": "Програмування",
  "skills.js": "Js: ES6+, OOП, AJAX, JSON, робота з масивами, рядками, об'єктами, подіями, датами, таймерами, об'єктом Event; замикання, DOM, метрики, регулярні вирази;",
  "skills.jquery": "JQuery: маніпулювання елементами сторінки, робота з подіями і анімаціями, настройка модулів і плагінів",
  "skills.gulp": "Gulp: збірка, деплой проектів;",
  "skills.sql": "SQL",
  "skills.c" : "C: робота зі змінними, функціями, аргументами командного рядка, вказівниками; пов'язані списки, хеш-таблиці, дерева, розподіл динамічної пам'яті.",
  "experience.name" : "Досвід",
  "experience.non-commercial" : "Некомерційний досвід ",
  "experience.commercial" : "Комерційний досвід ",
  "experience.turnkey" : "Сайт під ключ",
  "experience.semantic" : "Семантична верстка;",
  "experience.bem" : "css методологія БЕМ;",
  "experience.perfomance": "Особлива увага до продуктивності сторінки.",
  "freelance.date" : "Жовтень 2017 - Квітень 2018",
  "bekey.date" : "Квітень 2018 - Теперішній час ",
  "bekey.info" : "Верстка сторінки відповідно до наданого макету PSD, редагувати існуючі сторінки; Додавання та редагування функціональних можливостей елементів на сторінці. Створення структурованого, крос-браузерного, що тестується коду; Створення нових проектів і робота над існуючими проектами.",
  "interests": "Інтереси",
  "hobbies": " Інтереси і Хоббі",
  "books" : " Книги",
  "travel": " Подорожі",
  "music" : " Музика і Театр",
  "photography": " Фотографія",
  "intelectual" : " Інтелектуальні ігри",
  "bike": " Велосипед"};


  // FontAwesomeConfig = { searchPseudoElements: true };

  var unitegallery_api = $("#gallery").unitegallery({
            gallery_theme: "slider",
            gallery_autoplay: false,
            slider_control_zoom:true,
            slider_enable_zoom_panel: true,
            // slider_enable_fullscreen_button: true,
            slider_arrow_left_align_vert:"190px",
            slider_transition_speed: 500,
            gallery_width: 420,
            gallery_height: 240,

          });
  var markupSkills = document.querySelector('.markup-skills').children
  
  for (i = 0; i < 4; i++) {
    markupSkills[i].addEventListener('mouseover', listener.bind( null, i))


}

$('.gradient-list').mouseenter(function(){
     $('.fa-check-square').attr('data-prefix', 'far')
    $(this).find('span>.fa-check-square').attr('data-prefix', 'fas')
})
$('.gradient-list').mouseleave(function(){
    $(this).find('.fa-check-square').attr('data-prefix', 'far')
  })

$('.gradient-list').closest('.col-md-6').mouseleave(function(){
    $('.fa-check-square').attr('data-prefix', 'far')
})

function listener(index) {
         unitegallery_api.selectItem(index);
}
// $('section').on('click', function(){})

  /*LANGUAGE BTN HANDLER*/
  $('.btn.lang.ua').click(function(){
    var that = this;
     setTimeout(function() {
      changeLanguage(lang_ua)
     $('h2,.accent,.gradient-list').removeClass('ru').addClass('ua')
     $('h3').removeClass('ru')
      $('.btn.lang').removeClass('active')
     $(that).addClass('active')
   },100)
  })

  $('.btn.lang.en').click(function(){
    var that = this;
    setTimeout(function() { 
      changeLanguage(lang_en)
      $('h2,.accent,.gradient-list').removeClass('ru ua')
      $('h3').removeClass('ru')
      $('.btn.lang').removeClass('active')
       $(that).addClass('active')
    }, 100)
  })

    $('.btn.lang.ru').click(function(){
    var that = this
    setTimeout(function() {
      changeLanguage(lang_ru)
      $('h2,.accent,.gradient-list,h3').removeClass('ua').addClass('ru')
      $('.btn.lang').removeClass('active')
      $(that).addClass('active')
   }, 100)
  /*LANGUAGE BTN HANDLER END*/
  })
function activeDescription() {
  if ($(window).width() <= 768) {
    $(".turnkey-title,.technologies-list").addClass("active");
  }
}
  activeDescription();
  $(window).resize(activeDescription);

    $(".turnkey.thumb img").mouseenter(function(){
      $(".turnkey-title").addClass("active");
    })
    $(".legicash.thumb img").mouseenter(function(){
      $(".technologies-list").addClass("active");
    })

    function changeLanguage(langObject){
      var localizeElems = document.querySelectorAll('[data-localize]')
        $(localizeElems).each(function(){
          var $translation = $(this).attr('data-localize')
          console.log($translation)
           $(this).html(langObject[$translation])
        })
      
      };
        
   
 
});
