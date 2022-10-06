$(function(){

/* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fide: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
});

window.onload = function(){
    let min = 29;
    let sec = 60;
    setInterval(function(){

      document.getElementById("timer").innerHTML = min +" : " + sec ;
      sec--;
      if(sec == 00)
      {
        min--;
        sec = 60;
        if (min == 0)
        {
           min = 2;
        }
      }
     },500);
   }

