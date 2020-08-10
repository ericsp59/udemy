/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 
// ===============================================
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvs = document.querySelectorAll('.promo__adv img'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      addCheckbox = addForm.querySelector('[type = "checkbox"]'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg');

let filmList = document.querySelector('ul.promo__interactive-list');
let delBtns = [];

const addFilm = (films) => {
    let newFilm = addInput.value;
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = newFilm.slice(0, 21)+"...";
        }
        if (addCheckbox.checked){
            console.log('Favorite film');
        }
        films.push(newFilm);
        
        renderFilmList(filmList, films);
    }    
};

const SortArr = (arr) => {
    arr.sort();
};

const delElements = (parent) => {
    parent.forEach( item => {
        item.remove();
    } );
};

const changeGenre = () => {
    genre.innerText = 'драма';
};

const changeBg = () => {
    bg.style.background = 'url(img/bg.jpg)';
};

const renderFilmList = (parent, films) => {
    parent.innerHTML = '';
    SortArr(films);
    for (let i = 0; i < films.length; i++) {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}: ${films[i]}
                <div class="delete"></div>
            </li>`;
    }
    document.querySelectorAll('.delete').forEach((item, key) => {
        item.addEventListener('click', (e) => {
            //item.parentElement.remove();
            films.splice(key, 1);
            renderFilmList(parent, films);
        });
    });
};

addForm.addEventListener('submit', (e) => {
    //console.log(addForm);
    e.preventDefault();

    addFilm(movieDB.movies);
    e.target.reset();
});

delElements(promoAdvs);
changeGenre();
changeBg();
renderFilmList(filmList, movieDB.movies);
