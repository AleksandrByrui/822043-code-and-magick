'use strict';
// var CLOUD_WIDTH = 40;
// var CLOUD_HEIGHT = 150;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 15;
var BAR_WIDHT = 40;
// тут мы узнали случайное максимальное число
var getMax = function (items) {
  var maxItem = 0;
  for (var i = 0; i < items.length; i = i + 1) {
    // console.log(items[i]);
    if (maxItem < items[i]) {
      maxItem = items[i];
    }
  }
  return maxItem;
};
// тут мы узнали случайное максимальное число
// тут мы сделали случайный цвет колонок
var getColor = function () {
  var z = Math.floor(Math.random() * 250);
  return 'rgba(0, 0, ' + z + ', 1)';
};
// тут мы сделали случайный цвет колонок
// тут мы разместили столбик гистограмма
// var renderCloud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
// тут мы разместили столбик гистограмма
// вывели в консоль максимальное число
window.renderStatistics = function (ctx, players, times) {
  var max = getMax(times);
  // console.log('Максимальное значение = ' + max);
  // console.log(players);
  // console.log(times);
  // размер облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // размер второго облока
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  // шрифт
  ctx.font = '16px \'PT Mono\'';
  ctx.fillStyle = '#000';
  // вывели информацию
  ctx.fillText('Ура вы победели!', 160, 30);
  ctx.fillText('Список результатов:', 160, 50);
  // высота, ширина и растояние между колонками
  for (var i = 0; i < times.length; i = i + 1) {
    // console.log(times[i] * 150 / max)
    // var width = BAR_WIDHT;
    var height = times[i] * 150 / max;
    var x = GAP + CLOUD_X + (GAP + BAR_WIDHT) * i;
    var y = GAP + CLOUD_Y + (150 - height);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = getColor();
    }
    // разместили цыфры выше колонок, а текст ниже
    ctx.fillText(times[i].toFixed(0), x, y - FONT_GAP);
    ctx.fillRect(x, y, BAR_WIDHT, height);
    ctx.fillText(players[i], x, y + height + FONT_GAP);
  }
  // renderCloud(ctx, CLOUD_HEIGHT, CLOUD_WIDTH, '#000');
  // ctx.fillStyle = 'red';
  // ctx.fillText = ('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDHT, CLOUD_Y + GAP, BAR_HEIGHT, 150);
};
