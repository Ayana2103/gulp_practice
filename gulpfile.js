// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));

// style.scssの監視タスクを作成する
gulp.task('default', function () {
  // .scssファイルを監視
  return gulp.watch('sass/**/*.scss', function () {
  // sass内すべての.scssの更新があった場合の処理

  // sass内.scssファイルを取得 （全てのSCSSファイルを取得）
  return gulp.src('sass/**/*.scss')
  // Sassのコンパイルを実⾏
  .pipe(sass({
    outputStyle: 'expanded'
  })
  // Sassのコンパイルエラーを表⽰
  // (これがないと⾃動的に⽌まってしまう)
  .on('error', sass.logError))
  // cssフォルダー以下に保存
  .pipe(gulp.dest('css','css2'));
  });
});