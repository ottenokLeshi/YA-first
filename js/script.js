const lecturers = require('./lecturers.js');
const $ = require('jquery');
require('../css/normalize.css');
require('../css/style.css');
require('../css/media.css');
require('../css/modificators.css');

$(document).ready(function(){
	const popup = $(".schedule__popup");
	setDefaulToLinks();
	setPopupListeners(popup);
	setLinksListeners(popup);
	setListenersToSchoolNames();
})

/*
 * Запрещение всплытия при нажатии на ссылку
 */
const setDefaulToLinks = function() {
	const links = $(".schedule__item:not(.schedule__item__passed)").find("a");
	for (let i = 0; i < links.length; i++){
		$(links[i]).click(function(event) {
			event.preventDefault();
  			event.stopPropagation();
		})
	}

};

/**
 * Функция, проверяющая, скрыт ли блок
 */
const blockIsHidden = function(block){
	return $(block).hasClass("hidden");
}

/**
 * Функция, скрывающая блок
 */
const hideBlock = function(block){
	$(block).addClass("hidden");
};

/**
 * Функция, восстанавливающая видимость блока
 */
const showBlock = function(block){
	$(block).removeClass("hidden");
}

/**
 * Выставление слушателей на закрытие высплывающего окна
 */
const setPopupListeners = function(popup){
	$(".popup__close__icon").click(function(){
		hideBlock(popup);
	});
	$(".schedule__popup").click(function(){
		hideBlock(popup);
	});
};

/**
 * Выставление слушателей на лекторов
 */
const setLinksListeners = function(popup) {
	const lecturersLinks = $(".schedule__lecturer").find("a");
	for (let i = 0; i < lecturersLinks.length; i++){
		$(lecturersLinks[i]).click(function(event) {
			const lecturersId = $(event.target).attr("class");
  			setTextToPopup(popup, lecturersId);
  			showBlock(popup);
		})
	}
};

/**
 * Занесение информации о лекторе во всплывающее окно
 */
const setTextToPopup = function(popup, lecturersId) {
	const lector = lecturers[lecturersId - 1];
	const lectorName = lector.name;
	const lectorDescr = lector.description;
	const lectorImgSrc = lector.img_sourse;
	$(".popup__lecturer").html(lectorName);
	$(".popup__description").html(lectorDescr);
	$(".popup__img").attr("src", "img/" + lectorImgSrc);
};

/**
 * Выставление слушателей для фильтрации по школам
 */
const setListenersToSchoolNames = function() {
	const schoolBoxes = $(".select__box");
	for (let i = 0; i < schoolBoxes.length; i++){
		$(schoolBoxes[i]).on("click", function(event) {
			const checkedBoxes = $("input.select__box:checked");
			const uncheckedBoxes = $(".select__box:not(:checked)");

			for (let i = 0; i < uncheckedBoxes.length; i++){
				const unvisibleSchoolName = $(uncheckedBoxes[i]).attr("class").split(" ")[1];
				const unvisibleSchoolBlocks = $("." + unvisibleSchoolName).parent("li");
				for (let i = 0; i < unvisibleSchoolBlocks.length; i++){
					hideBlock($(unvisibleSchoolBlocks[i]));
				}
			}

			for (let i = 0; i < checkedBoxes.length; i++){
				const visibleSchoolName = $(checkedBoxes[i]).attr("class").split(" ")[1];
				const visibleSchoolBlocks = $("." + visibleSchoolName).parent("li");
				for (let i = 0; i < visibleSchoolBlocks.length; i++){
					showBlock($(visibleSchoolBlocks[i]));
				}
			}
		})
	}
};
			