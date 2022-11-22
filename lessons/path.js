const path = require('path');

console.log('Склеить участки пути', path.join(__dirname, '..'));

const fullpath = path.resolve('first', 'second', 'third.js');
console.log('Склеить участки пути', fullpath);
console.log('Парсинг пути', path.parse(fullpath));
console.log('Разделитель в ОС', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('название файла', path.basename(fullpath));
console.log('расширение файла', path.extname(fullpath));


//----------------------------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5431';

const url = new URL(siteURL);
console.log(url);