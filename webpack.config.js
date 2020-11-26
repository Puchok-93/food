"use strict";

let path = require('path');

module.exports = {
    mode: 'development', // Режим разработки / продакшена
    entry: './js/script.js', // Точка входа с какого файла начинается сборка скриптов
    output: { // Точка выхода
        filename: 'bundle.js', // Имя файла, который получился после сборки
        path: __dirname + '/js' // Папка куда этот файл сохранен
    },
    watch: true, // Следит за изменениями в файлам и пересобирает сборку скриптов
    devtool: 'source-map', // Созадет карту
    module: {}
};