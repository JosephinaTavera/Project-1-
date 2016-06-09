console.log('file is linked');

for (var i =1; i < 82; i++ ){
	$('#' + i).addClass('empty');
	$('#' + i).click(function(){
	console.log('that tickles' + i);
	
})};


// for (var i =4; i > 0; i--){
// 	$("body").append('<ul></ul>')
// 	console.log('variable i is ' + i)
// 		for (var k = 1; k < (i); k++){
// 			console.log('variable k is' + k);
// 			$('ul').append('<li><div></div></li>')
// 		}
// }