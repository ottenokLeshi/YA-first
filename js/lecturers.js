/**
 * Массив данных о лекторах
 *
 */


const lecturers = [
	{
		id: 1,
		name: "Антон Тен",
		description: "В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.",
		img_sourse: "anton_ten.jpg",
		link: "https://events.yandex.ru/lib/people/8953757/"
	},
	{
		id: 2,
		name: "Васюнин Николай",
		description: "Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.",
		img_sourse: "nikolay_vasiunin.jpg",
		link: "https://events.yandex.ru/lib/people/9123538/"
	},
	{
		id: 3,
		name: "Сергей Калабин",
		description: "Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям.",
		img_sourse: "sergey_kalabin.jpg",
		link: "https://events.yandex.ru/lib/people/9295914/"
	},
	{
		id: 4,
		name: "Сергей Томилов",
		description: "Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ.",
		img_sourse: "sergey_tomilov.jpg",
		link: "https://events.yandex.ru/lib/people/3530628/"
	},
	{
		id: 5,
		name: "Дарья Старицына",
		description: "Дизайнер мобильных продуктов. До прихода в компанию занималась интерфейсами мобильных игр. В Яндексе делает Браузер под все платформы. Также успела поработать над экспериментальными голосовыми интерфейсами и мобильной версией главной страницы Яндекса.",
		img_sourse: "daria_starizina.jpg",
		link: "https://events.yandex.ru/lib/people/9664312/"
	},
	{
		id: 6,
		name: "Rijshouwer Krijn",
		description: "Krijn Rijshouwer is a product designer. “I like to create and work on products that have a positive impact in the world. The thing that attracts me most in doing what I do at Framer, and did before at other companies, is changing the way a lot of people work, live and consume on a daily basis with just the push of a button.",
		img_sourse: "rijshouwer_krijn.jpg",
		link: "https://events.yandex.ru/lib/people/9664406/"
	},
	{
		id: 7,
		name: "Treub Jonas",
		description: "Jonas Treub is a software developer. “I am a creative software developer with experience working on a variety of projects, from small prototypes to large apps for some well-known Dutch clients.”",
		img_sourse: "treub_jonas.jpg",
		link: "https://events.yandex.ru/lib/people/9664416/"
	},
	{
		id: 8,
		name: "Андрей Гевак",
		description: "В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты. В докладе я расскажу о том, как шёл процесс переосмысления, почему мы сделали именно так, как сделали, и что из этого всего вышло.",
		img_sourse: "andrey_gevak.jpg",
		link: "https://events.yandex.ru/lib/people/664322/"
	},
	{
		id: 9,
		name: "Кондратьев Александр",
		description: "Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации.",
		img_sourse: "alex_kondratiev.jpg",
		link: "https://events.yandex.ru/lib/people/10090355/"
	},
	{
		id: 10,
		name: "Юрий Подорожный",
		description: "Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет.",
		img_sourse: "yuri_podorognii.jpg",
		link: "https://events.yandex.ru/lib/people/10270070/"
	},
	{
		id: 11,
		name: "Дмитрий Моруз",
		description: "Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе.",
		img_sourse: "dmitrii_moruz.jpg",
		link: "https://events.yandex.ru/lib/people/10446351/"
	},
	{
		id: 12,
		name: "Ждан Филиппов",
		description: "Арт-директор коммуникаций Яндекса. В прошлом — арт-директор журналов «CitizenK», «Эрмитаж», «Секрет Фирмы», «Top-Flight», сотрудник «Мастерской Димы Барбанеля». Занимался макетной работой для компаний Readymag, Aliexpress, ONY, Charmer, MINI, Grohe и Мосметрострой.",
		img_sourse: "jdan_filippov.jpg",
		link: "https://events.yandex.ru/lib/people/10446382/"
	},
	{
		id: 13,
		name: "Дмитрий Душкин",
		description: "Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.",
		img_sourse: "dmitri_dushkin.jpg",
		link: "https://events.yandex.ru/lib/people/9000962/"
	},
	{
		id: 14,
		name: "Максим Васильев",
		description: "Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.",
		img_sourse: "maksim_vasiliev.jpg",
		link: "https://events.yandex.ru/lib/people/9348837/"
	},
	{
		id: 15,
		name: "Сергей Бережной",
		description: "Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.",
		img_sourse: "sergey_berejnoy.jpg",
		link: "https://events.yandex.ru/lib/people/34/"
	},
	{
		id: 16,
		name: "Андрей Морозов",
		description: "Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.",
		img_sourse: "andey_morozov.jpg",
		link: "https://events.yandex.ru/lib/people/9727130/"
	},
	{
		id: 17,
		name: "Иван Карев",
		description: "Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.",
		img_sourse: "ivan_karev.jpg",
		link: "https://events.yandex.ru/lib/people/143952/"
	},
	{
		id: 18,
		name: "Прокопюк Андрей",
		description: "В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.",
		img_sourse: "andrey_prokopiuk.jpg",
		link: "https://events.yandex.ru/lib/people/10135442/"
	},
	{
		id: 19,
		name: "Эдуард Мацуков",
		description: "Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.",
		img_sourse: "eduard_mazukov.jpg",
		link: "https://events.yandex.ru/lib/people/3768719/"
	},
	{
		id: 20,
		name: "Дмитрий Складнов",
		description: "Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.",
		img_sourse: "dmitrii_ckladnov.jpg",
		link: "https://events.yandex.ru/lib/people/8979250/"
	},
	{
		id: 21,
		name: "Роман Григорьев",
		description: "Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска.",
		img_sourse: "roman_grigoriev.jpg",
		link: "https://events.yandex.ru/lib/people/9149820/"
	},
	{
		id: 22,
		name: "Алексей Щербинин",
		description: "Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера.",
		img_sourse: "aleksey_sherbin.jpg",
		link: "https://events.yandex.ru/lib/people/9320769/"
	},
	{
		id: 23,
		name: "Алексей Макаров",
		description: "Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года.",
		img_sourse: "aleksey_makarov.jpg",
		link: "https://events.yandex.ru/lib/people/9513302/"
	},
	{
		id: 24,
		name: "Владимир Тагаков",
		description: "Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт.",
		img_sourse: "vladimir_tagakov.jpg",
		link: "https://events.yandex.ru/lib/people/9513351/"
	},
	{
		id: 25,
		name: "Максим Хромцов",
		description: "Учится в магистратуре на факультете информатики и вычислительной техники Московского института радиотехники, электроники и автоматики. С 2005 года занимается разработкой приложений (игры, бизнес-приложения) для мобильных устройств на платформах J2ME, Windows Mobile, Android, Symbian, участвовал в разработке веб-приложений на Java EE. В Яндексе с 2010 года, занимается разработкой для мобильных устройств на платформах J2ME и Android.",
		img_sourse: "maksim_hromzov.jpg",
		link: "https://events.yandex.ru/lib/people/417/"
	},
	{
		id: 26,
		name: "Денис Загаевский",
		description: "Окончил факультет ВМК МГУ им. Ломоносова. Занимается разработкой приложений и игр с 2011 года, в 2012-м сконцентрировался на мобильных платформах Android и iOS. В Яндексе разрабатывает приложения для Android.",
		img_sourse: "denis_zagaevski.jpg",
		link: "https://events.yandex.ru/lib/people/10113492/"
	},
	{
		id: 27,
		name: "Дмитрий Попов",
		description: "Окончил факультет ПМТ Вятского государственного университета в 2012 году. В Яндексе с 2015-го, занимается разработкой продуктов медийных сервисов.",
		img_sourse: "dmitri_popov.jpg",
		link: "https://events.yandex.ru/lib/people/10291395/"
	},
	{
		id: 28,
		name: "Илья Сергеев",
		description: "Разрабатывает приложения под мобильные платформы с 2009 года. За это время принял участие более чем в 30 законченных проектах под Android, iOS, и Windows Phone. В Яндексе с 2015 года, занимается разработкой КиноПоиска под Android и iOS.",
		img_sourse: "ilia_sergeev.jpg",
		link: "https://events.yandex.ru/lib/people/10682529/"
	}
];

module.exports = lecturers;