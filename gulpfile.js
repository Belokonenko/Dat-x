//основной модуль
import gulp from "gulp";

//импорты путей
import { path } from "./gulp/config/paht.js";

//импорты плагин
import { plugins } from "./gulp/config/plugins.js";

//глобальная переменная 
global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins
}

//=== импорты тасков ===
import { fonts } from "./gulp/tasks/fotns.js";
import { copy }   from "./gulp/tasks/copy.js";
import { reset }  from "./gulp/tasks/reset.js";
import { html }   from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
//=== /импорты тасков ===


function watcher() {
   gulp.watch(path.watch.fonts, fonts); //2 аргумена (1-й файл за которым слежка. 2-й таск)
   gulp.watch(path.watch.files, copy); //2 аргумена (1-й файл за которым слежка. 2-й таск)
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}



//=== сценарии синхроные ===
const mainTasks = gulp.parallel(html, fonts, copy, scss, js, images);//поместим в последовательные
//=== сценарии последовательные ===
const dev = gulp.series(reset, mainTasks,  gulp.parallel(watcher, server));
//=== /сценарии ===

//===  выполнение сценарии ===
gulp.task('default', dev);
//===  /выполнение сценарии ===

