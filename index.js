//必要な情報を取得
const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

//経過時間のミリ秒
let elapsed = 0;

//初期値はなし、ここに16行目の値が入ってくる
let intervalId = null;

//クリックされた時の処理
start.addEventListener('click', function (event) {
  let pre = new Date(); //1つ前のDate取得
  intervalId = setInterval(function() {
    const now = new Date();
    elapsed += now - pre //？ミリ秒
    pre = now;
    console.log(elapsed);
  }, 10);
});

stop.addEventListener('click', function (event)  {
  clearInterval(intervalId);
});

reset.addEventListener('click', function (event) {
    elapsed = 0;
});