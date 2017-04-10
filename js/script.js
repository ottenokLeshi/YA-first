const lecturers = require('./lecturers.js');
const $ = require('jquery');
require('../css/normalize.css');
require('../css/style.css');
require('../css/media.css');
require('../css/modificators.css');

$(document).ready(function(){
	const $popup = $(".schedule__popup");
	const $lecturersLinks = $(".schedule__lecturer").find("a");
	const $allLinks = $(".schedule__item:not(.schedule__item__passed)").find("a");
	const $popupCloseButton = $(".popup__close");
	const $popupLecturer = $(".popup__lecturer");
	const $popupDescription = $(".popup__description");
	const $popupImg = $(".popup__img");
	const $schoolBoxes = $(".select__box");

	setDefaulToLinks($allLinks);
	setPopupListeners($popup, $popupCloseButton);
	setLinksListeners($popup, $lecturersLinks, {
		$popupLecturer,
		$popupDescription,
		$popupImg
	});
	setListenersToSchoolNames($schoolBoxes);
})

/*
 * Запрещение всплытия при нажатии на пустую ссылку
 * 
 * @param {Object} $allLinks - Массив ссылок
 *
 */
const setDefaulToLinks = function($allLinks) {
	$allLinks.on('click', function(event) {
		event.preventDefault();
  		event.stopPropagation();
	})
};

/**
 * Функция, проверяющая, скрыт ли блок
 *
 * @param {Object} $block - Элемент DOM
 *
 */
const blockIsHidden = function($block){
	return $($block).hasClass("hidden");
}

/**
 * Функция, скрывающая блок
 *
 * @param {Object} $block - Элемент DOM
 *
 */
const hideBlock = function($block){
	$($block).addClass("hidden");
};

/**
 * Функция, восстанавливающая видимость блока
 *
 * @param {Object} $block - Элемент DOM
 *
 */
const showBlock = function($block){
	$($block).removeClass("hidden");
}

/**
 * Выставление слушателей на закрытие высплывающего окна
 *
 * @param {Object} $popup - Элемент DOM всплывающего окна
 * @param {Object} $popupCloseButton - Элемент DOM кнопки, закрывающей окно
 *
 */
const setPopupListeners = function($popup, $popupCloseButton){
	$popupCloseButton.click(function(){
		hideBlock($popup);
	});
};

/**
 * Выставление слушателей на лекторов
 *
 * @param {Object} $popup - Элемент DOM всплывающего окна
 * @param {Object} $lecturersLinks - Массив ссылок, при нажатии на который должна появляться информация о лекторе
 * @param {Object} lecturerObj - Объект, хранящий элементы DOM всплывающего окна, который нужно будет заполнить
 *
 */
const setLinksListeners = function($popup, $lecturersLinks, lecturerObj) {
	$lecturersLinks.on('click', function(event) {
		const lecturersId = $(event.target).attr("class");
  		setTextToPopup($popup, lecturersId, lecturerObj);
  		showBlock($popup);
	})

};

/**
 * Занесение информации о лекторе во всплывающее окно
 *
 * @param {Object} $popup - Элемент DOM всплывающего окна
 * @param {Object} $lecturersLinks - Массив ссылок, при нажатии на который должна появляться информация о лекторе
 * @param {Object} lecturerObj.$popupLecturer - Элемент DOM, в котором должно находиться имя лектора
 * @param {Object} lecturerObj.$popupDescription - Элемент DOM, в котором должно быть описание лектора
 * @param {Object} lecturerObj.$popupImg - Элемент DOM, в котором должно быть изображение
 *
 */
const setTextToPopup = function($popup, lecturersId, lecturerObj) {
	const lector = lecturers[lecturersId - 1];
	const lectorName = lector.name;
	const lectorDescr = lector.description;
	const lectorImgSrc = lector.img_sourse;
	lecturerObj.$popupLecturer.html(lectorName);
	lecturerObj.$popupDescription.html(lectorDescr);
	lecturerObj.$popupImg.attr("src", "img/" + lectorImgSrc);
};

/**
 * Выставление слушателей для фильтрации по школам
 *
 * @param {Object} $schoolBoxes - Чекбоксы для школ
 *
 */
const setListenersToSchoolNames = function($schoolBoxes) {
	$schoolBoxes.on('click', function() {
		const $checkedBoxes = $("input.select__box:checked");
		const $uncheckedBoxes = $("input.select__box:not(:checked)");

		for (let i = 0; i < $uncheckedBoxes.length; i++){
			const unvisibleSchoolName = $($uncheckedBoxes[i]).attr("class").split(" ")[1];
			const unvisibleSchoolBlocks = $("." + unvisibleSchoolName).parent("li");
			for (let i = 0; i < unvisibleSchoolBlocks.length; i++){
				hideBlock($(unvisibleSchoolBlocks[i]));
			}
		}

		for (let i = 0; i < $checkedBoxes.length; i++){
			const visibleSchoolName = $($checkedBoxes[i]).attr("class").split(" ")[1];
			const visibleSchoolBlocks = $("." + visibleSchoolName).parent("li");
			for (let i = 0; i < visibleSchoolBlocks.length; i++){
				showBlock($(visibleSchoolBlocks[i]));
			}
		}
	})
};
			