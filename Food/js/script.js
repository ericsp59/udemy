// назначение глобального обработчика событий
window.addEventListener('DOMContentLoaded', () => {


/////////////////////////////////// tabs

// переменные
    const tabs = document.querySelectorAll('.tabheader__item'), // выбрали все табы
          tabsContent = document.querySelectorAll('.tabcontent'), // содержимое табов
          tabsParent = document.querySelector('.tabheader'); // родитель tabs для делегирования


    function hideTabContent() { 
        tabsContent.forEach((item, key) => { // Скрываем содержимое табов
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item, key) => { // Удаляем класс активности на табах
            item.classList.remove('tabheader__item_active'); 
        });
    }

    function showTabContent(num = 0) { // '0' по умолчанию 
        //tabsContent[num].style.display = 'block'; // показываем содержимое таба num
        tabsContent[num].classList.add('show','fade');
        tabsContent[num].classList.remove('hide');
        tabs[num].classList.add('tabheader__item_active'); // делаем активный таб
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => { // добавляем обработчик...
        if (e.target && e.target.matches('.tabheader__item')){ // на все табы .tabheader__item
            const target = e.target;
            tabs.forEach((item, key) => { // проходим по всем табам циклом...
                if (item == target) { //  ...и сраниваем с нажатым элементом
                    hideTabContent(); // скрываем содержимое
                    showTabContent(key); // выводим нужный таб
                }
            });
        }
    });
/////////////////////////////// timer

    // const deadline = '2020-08-12';

    // function getTimeRemaining(endTime) { // получаем разницу между датами
    //     const t = Date.parse(endTime) - Date.parse(new Date()),
    //           days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //           hours = Math.floor((t / 1000 * 60 * 60) % 24),
    //           minutes = Math.floor((t / 1000 / 60) % 60),
    //           seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds,
    //     };
    // }

    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //           days = timer.querySelector('#days'),
    //           hours = timer.querySelector('#hours'),
    //           minutes = timer.querySelector('#minutes'),
    //           seconds = timer.querySelector('#seconds'),
    //           timeInterval = setInterval(updateClock, 1000);
    // updateClock();   
    //     function updateClock() {
    //         const t = getTimeRemaining(endTime);

    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    
    // setClock('.timer', deadline);



    const date = '2020-09-5 12:00:04';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), 
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60)% 60),
              seconds = Math.floor(t / 1000 % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };

    }

    function setClock(endTime) {
        const elem = document.querySelector('.timer'),
              days = elem.querySelector('#days'),
              hours = elem.querySelector('#hours'),
              minutes = elem.querySelector('#minutes'),
              seconds = elem.querySelector('#seconds'),
              timerId = setInterval(updateClock, 1000);

        updateClock();      

        function updateClock() {
            const t = getTimeRemaining(endTime);
           
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total <= 0) {
                clearInterval(timerId);
            }
        }
    } 

    setClock(date);
    getTimeRemaining(date);






});

