import replace from "gulp-replace"; //  Плагин поиск и замена
import plumber from "gulp-plumber"; //  Обработка ошибок
import notify from "gulp-notify";   //  Обработка сообщений
import browserSync from "browser-sync";
import newer from "gulp-newer"; //проверка обновлений (img);

//  Экспорет обекта plugins
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
}
 
