'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
//  объект персонажа
//  массив персонажей
var similarWizards = [];
//  данные
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
//  получаем объект персонажа
var getWizard = function (wizard) {
  var a = Math.floor(Math.random() * NAMES.length);
  var b = Math.floor(Math.random() * SURNAMES.length);
  var c = Math.floor(Math.random() * COLORS.length);
  var d = Math.floor(Math.random() * EYES.length);
  wizard.name = NAMES[a] + ' ' + SURNAMES[b];
  wizard.coatColor = COLORS[c];
  wizard.eyesColor = EYES[d];
  return wizard;
};
//  получаем массив персонажей
var getSimilarWizards = function () {
  for (var i = 0; i < 4; i++) {
    similarWizards[i] = getWizard(similarWizards[i]);
    // console.log(similarWizards[i]);
  }
  return similarWizards;
};
getSimilarWizards();
// console.log(similarWizards);
//  создаем персонажа из шаблона
var getWizardTemlate = function (wizard) {
  var wizardTemlate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);
  wizardTemlate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemlate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardTemlate.querySelector('.setup-similar-label').textContent = wizard.name;
  // console.log(wizardTemlate);
  return wizardTemlate;
};
//  создаем список похожих персонажей
var fragment = document.createDocumentFragment();
for (var j = 0; j < similarWizards.length; j++) {
  fragment.appendChild(getWizardTemlate(similarWizards[j]));
}
document.querySelector('.setup-similar-list').appendChild(fragment);

var number = 0;
for (var i = 1; i < 15; i++) {
  number = number + i;
}
