$(document).ready(() => {
	const popup = $(".schedule__popup");
	setPopupListeners(popup);
	setLinksListeners(popup);
	setListenersToSchoolNames();
})

/**
 * Функция, проверяющая, скрыт ли блок
 */
const blockIsHidden = (block) => {
	return $(block).hasClass("hidden");
}

/**
 * Функция, скрывающая блок
 */
const hideBlock = (block) => {
	$(block).addClass("hidden");
};

/**
 * Функция, восстанавливающая видимость блока
 */
const showBlock = (block) => {
	$(block).removeClass("hidden");
}

/**
 * Выставление слушателей на закрытие высплывающего окна
 */
const setPopupListeners = (popup) => {
	$(".popup__close__icon").click(() => {
		hideBlock(popup);
	});
	$(".schedule__popup").click(() => {
		hideBlock(popup);
	});
};

/**
 * Выставление слушателей на лекторов
 */
const setLinksListeners = (popup) => {
	const lecturersLinks = $(".schedule__lecturer").find("a");
	for (let i = 0; i < lecturersLinks.length; i++){
		$(lecturersLinks[i]).click(() => {
			const lecturersId = $(event.target).attr("class");
			/*
			 * Запрещение всплытия при нажатии на ссылку
			 */
			event.preventDefault();
  			event.stopPropagation();
  			setTextToPopup(popup, lecturersId);
  			showBlock(popup);
		})
	}
};

/**
 * Занесение информации о лекторе во всплывающее окно
 */
const setTextToPopup = (popup, lecturersId) => {
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
const setListenersToSchoolNames = () => {
	const schoolBoxes = $(".select__box");
	for (let i = 0; i < schoolBoxes.length; i++){
		$(schoolBoxes[i]).on("click", () => {
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