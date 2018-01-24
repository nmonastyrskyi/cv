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
  "skills.photoshop ": "Adobe Photoshop, Adobe Experience Design;",
  "skills.sublime ": "Sublime Text ( + Emmet ) for editing code",
  "skills.programming": "Programming",
  "skills.js": "JS: work with arrays, strings, objects, events, dates, timers, Event object, closures, DOM, metrics, regular expressions, ES6 functions and variables; Understanding of OOP & asynchronous functions;",
  "skills.jquery": "JQuery: manipulating page elements, work with events & animations, customization of modules and plugins;",
  "skills.gulp": "Gulp: projects building;",
  "skills.sql": "SQL",
  "skills.c" : "C: Working with variables, functions, command-line arguements, pointers, linked lists, hash tables, trees, dynamic memory allocation.",
  "expirience.name" : "Expirience",
  "expirience.non-commercial" : "Non-commercial expirience",
  "expirience.commercial" : "Commercial expirience",
  "expirience.turnkey" : "Turnkey Website",
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
  "basic.rank1": "Бакалавр (Економика предприятия)",
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
  "skills.email": "Верстка електронных писем",
  "skills.sass": "CSS-препроцессор: Sass;",
  "skills.pug": "HTML-препроцессор: Pug( Jade );",
  "skills.gulp": "Gulp;",
  "skills.photoshop": "Adobe Photoshop, Adobe Experience Design;",
  "skills.sublime": "Sublime Text ( + Emmet ) для редактирования кода",
  "skills.programming": "Програмимрование",
  "skills.js": "Js: Работа с массивами, строками, объектами, событиями, датами, таймерами, объектом Event, замыкания, DOM, метрики, регулярные выражения, функции и переменные ES6;",
  "skills.jquery": "JQuery: манипулирование элементами страницы, работа с событиями и анимациями, настройка модулей и плагинов",
  "skills.gulp": "Gulp: сборка, деплой проэкта;",
  "skills.sql": "SQL",
  "skills.c" : "Cи: работа с переменными, функциями, аргументами командной строки, указателями, связанные списки, хеш-таблицы, деревья, распределение динамической памяти.",
  "expirience.name" : "Опыт",
  "expirience.non-commercial" : "Некоммерческий опыт",
  "expirience.commercial" : "Коммерческий опыт",
  "expirience.turnkey" : "Сайт под ключ",
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
  "basic.rank1": "Бакалавр (Экономiка пiдприємства)",
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
  "skills.email": "Верстка электронних писем",
  "skills.sass": "CSS-препроцесор: Sass;",
  "skills.pug": "HTML-препроцесор: Pug( Jade );",
  "skills.gulp": "Gulp;",
  "skills.photoshop": "Adobe Photoshop, Adobe Experience Design;",
  "skills.sublime": "Sublime Text ( + Emmet ) для редагування коду",
  "skills.programming": "Програмування",
  "skills.js": "Js: Робота з масивами, рядками, об'єктами, подіями, датами, таймерами, об'єктом Event; замикання DOM, метрики, регулярні вирази, функції та змінні ES6;",
  "skills.jquery": "JQuery: маніпулювання елементами сторінки, робота з подіями і анімаціями, настройка модулів і плагінів",
  "skills.gulp": "Gulp: збірка, деплой проектів;",
  "skills.sql": "SQL",
  "skills.c" : "C: робота зі змінними, функціями, аргументами командного рядка, вказівниками; пов'язані списки, хеш-таблиці, дерева, розподіл динамічної пам'яті.",
  "expirience.name" : "Досвід",
  "expirience.non-commercial" : "Некомерційний досвід ",
  "expirience.commercial" : "Комерційний досвід ",
  "expirience.turnkey" : "Сайт під ключ",
  "interests": "Інтереси",
  "hobbies": " Інтереси і Хоббі",
  "books" : " Книги",
  "travel": " Подорожі",
  "music" : " Музика і Театр",
  "photography": " Фотографія",
  "intelectual" : " Інтелектуальні ігри",
  "bike": " Велосипед"};


  // FontAwesomeConfig = { searchPseudoElements: true };

  var unitegallery_api = jQuery("#gallery").unitegallery({
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

    function changeLanguage(langObject){
      var localizeElems = document.querySelectorAll('[data-localize]')
        $(localizeElems).each(function(){
          var $translation = $(this).attr('data-localize')
          console.log($translation)
           $(this).html(langObject[$translation])
        })
      
      };
        
   
 
});
