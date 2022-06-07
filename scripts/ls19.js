"use strict";
// 1)
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

//console.log(personalMovieDB['count']);

// 3)
const movies = {
    movie1: {
        movieLast: prompt("Один из последних просмотренных фильмов?", ""),
        movieScore: +prompt("На сколько оцените его?", "")
    },
    movie2: {
        movieLast: prompt("Один из последних просмотренных фильмов?", ""),
        movieScore: +prompt("На сколько оцените его?", "")
    }
};

//console.log(movies);
//console.log(movieLast,movieScore);