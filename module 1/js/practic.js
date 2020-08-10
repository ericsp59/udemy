/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

function c(x){
    console.log(x);
}

let personalMovieDB = {
    count: 0,
    movies: [],
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt(`Сколько фильмов вы уже посмотрели?`);
        }
    },    
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            const   a = prompt(`Один из последних просмотренных фильмов?`, ``),
                    b = prompt(`На сколько оцените его?`, ``);
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                c(`done`);
            } else {
                c(`error`);
                i--;
            }
        }        
    },
    detectPersonalLevel: function(){
        if (this.count < 10) {
            c(`Просмотрено довольно мало фильмов`);
        } else if (10 <= this.count && this.count < 30 ){
            c(`Вы классический зритель`);
        } else if ( this.count > 30 ){
            c(`Вы киноман`);
        } else {
            c(`Произошла ошибка`);
        }        
    },
    showMyDB: function(hidden){
        if (!hidden) {
            c(personalMovieDB);
        }        
    },
    writeYourGenres: function(){
        for (let i = 0; i < 1; i++) {
            // this.genres[i] = prompt(`Ваш любимый жанр ${i+1}?`,'');
            // if ( this.genres[i]== null || this.genres[i] =='' ){
            //     i--;
            // }
            let genresLoc = prompt(`Введите любимые жанры через запятую `,'').toLowerCase();
            if ( genresLoc == null || genresLoc =='' ){
                i--;
            }
            this.genres = genresLoc.split(',');
        }
        this.genres.forEach((element, i) => {
            c(`Любимый жанр ${i+1} - ${element}`);
        });
    },
    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }
};
personalMovieDB.start();

personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);