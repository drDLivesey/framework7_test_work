// инициализируем наше приложение

var app = new Framework7({

  root: '#app',  
  name: 'Currencies by USD',  
  id: 'com.myapp.test',
  
});

var $$ = Dom7;  // аналог JQuery в Framework7

var currencies;  // сюда скинем результаты парсинга JSON'а с coinmarcetcap

app.views.create('.view-main');  // инициализируем представление


url = "https://api.coinmarketcap.com/v1/ticker/";  // url coinmarketcap

app.request.json(url, function (data) {  // запрашиваем JSON, парсим, отправляем результат в функцию createSwiper
	$$('.articles').html(data);
	createSwiper(data);
});


function createSwiper(currencies){  // создаём в html новые div'ы по количеству валют, присваиваем им класс и прописываем имя и курс
	var parent = document.getElementById('slider');
	for (var i = 0; i < currencies.length; i++) {
		 var div = document.createElement('div');
		 div.className = "swiper-slide";	
		 div.innerHTML = currencies[i].name + "<br />" + currencies[i].price_usd;
		 parent.appendChild(div);
	}; 

	var swiper = app.swiper.create('.swiper-container', {  // инициализируем swiper
    speed: 200,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    effect: "flip"
});

};

$$(".button").click(function() {  // подписываемся)
	app.dialog.alert("Smirnov AA", "author")

});




