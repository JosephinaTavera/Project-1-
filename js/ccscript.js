console.log('file is linked');


for (var i =1; i < 82; i++ ){
	$('#' + i).addClass('empty');
	$('#' + i).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
	$('#' + i).click(function(){
		var $curious = ($(this).attr('id'));
		console.log('that tickles' + $curious);
	})
};

$('#1').html("<img src='./css/img/marbles-simple-dots.svg' alt='Nicubunu-game-marbles-simple-dots'/>");

for (var i=1; i < 16; i++){
	$('#' + i).removeClass('empty');
	$('#' + i).addClass('full');
};

// * Attempted loop with mixed result *
// for (var i =4; i > 0; i--){
// 	$("body").append('<ul></ul>')
// 	console.log('variable i is ' + i)
// 		for (var k = 1; k < (i); k++){
// 			console.log('variable k is' + k);
// 			$('ul').append('<li><div></div></li>')
// 		}
// }