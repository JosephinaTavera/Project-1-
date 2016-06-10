// established variables
var $marble, $space, $marbleId, $spaceId
var movedAll = 0; 

// Add click event add class to board
for (var i =1; i < 82; i++ )
{
	$('#' + i).addClass('empty');
	// $('#' + i).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
	$('#' + i).click(function()
	{
		// Preparing variables for comparison
		if ($(this).attr("class") === "full")
		{
			$marble = $(this).attr("class");
			$marbleId = ($(this).attr('id'));
		}
		else
		{ 
			$space = $(this).attr("class");
			$spaceId = ($(this).attr('id'));
		}
		
		// Checking if condition met to move piece
		if (($marble === 'full') && ($space === 'empty'))
		{
			letsMove($marbleId,$spaceId);
		}
	})
};


// Adding marbles for player1
for (var i=1; i < 16; i++){
	$('#' + i).removeClass('empty');
	$('#' + i).addClass('full');
	$('#' + i).html("<img src='./css/img/redmarble.png' alt='Marble Yin Yang clip art'/>");
	$('#' + i).attr( 'title', 'player1' );
};

for (var i=67; i < 82; i++){
	$('#' + i).removeClass('empty');
	$('#' + i).addClass('full');
	$('#' + i).html("<img src='./css/img/greenmarble.png' alt='Marble Yin Yang clip art'/>");
	$('#' + i).attr( 'title', 'player2' );
};

var test =$('.title');
console.log('Title is ' + test.length);

// Moving the marble
var letsMove = function(marbleId,spaceId)
{
	var $innerMarble = $('#' + marbleId).html();
	var $innerSpace = $('#' + spaceId).html();
	if ((spaceId - marbleId) === 10 || (marbleId - spaceId) === 10 || (spaceId - marbleId) === 12 || (marbleId - spaceId) === 12 || (spaceId - marbleId) === 14 || (marbleId - spaceId) === 14 || (spaceId - marbleId) === 16 || (marbleId - spaceId) === 16 || (spaceId - marbleId) === 17 || (marbleId - spaceId) === 17) 
	{
		alert('try again');
	}
	else if ((spaceId - marbleId) < 10 || (marbleId - spaceId) < 10) 
	{
		$('#' + spaceId).removeClass('empty');
		$('#' + spaceId).addClass('full');
		$('#' + spaceId).html($innerMarble);
		$('#' + marbleId).removeClass('full');
		$('#' + marbleId).addClass('empty');
		$('#' + marbleId).html($innerSpace);
		$spaceId = "";
		$marbleId = "";
		$space = "";
		$marble = "";
	}
	else if ((spaceId - marbleId) > 10 || (marbleId - spaceId) > 10) {
		console.log('good move');
		$('#' + spaceId).removeClass('empty');
		$('#' + spaceId).addClass('full');
		$('#' + spaceId).html($innerMarble);
		$('#' + marbleId).removeClass('full');
		$('#' + marbleId).addClass('empty');
		$('#' + marbleId).html($innerSpace);
		$spaceId = "";
		$marbleId = "";
		$space = "";
		$marble = "";
	}
}

for (var i=1; i < 16; i++){
	var x = document.getElementById("#" + i).getAttribute("title");
	if ( x === "player1"){
		movedAll += 1;
	}
}
if (movedAll === 15){
	alert ('Player 1 is the winner');
}

// * Attempted loop with mixed result *
// for (var i =4; i > 0; i--){
// 	$("body").append('<ul></ul>')
// 	console.log('variable i is ' + i)
// 		for (var k = 1; k < (i); k++){
// 			console.log('variable k is' + k);
// 			$('ul').append('<li><div></div></li>')
// 		}
// }