
var $marble, $space, $marbleId, $spaceId

// Add click event add class to board
for (var i =1; i < 82; i++ )
{
	$('#' + i).addClass('empty');
	//$('#' + i).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
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

// $('#1').html("<img src='./css/img/marbles-simple-dots.svg' alt='Nicubunu-game-marbles-simple-dots'/> ' ");


// Adding marbles for players
for (var i=1; i < 16; i++){
	$('#' + i).removeClass('empty');
	$('#' + i).addClass('full');
	$('#' + i).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
};

for (var i=67; i < 82; i++){
	$('#' + i).removeClass('empty');
	$('#' + i).addClass('full');
	$('#' + i).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
};

// Moving the marble
var letsMove = function(marbleId,spaceId)
{
	console.log('difference is ' + (spaceId - marbleId));
	console.log('marble ID ' + marbleId);
	console.log('space ID ' + $spaceId);
	if ((spaceId - marbleId) < 10 || (marbleId - spaceId) < 10) 
	{
		$('#' + spaceId).removeClass('empty');
		$('#' + spaceId).addClass('full');
		$('#' + spaceId).html("<img src='./css/img/marble-yin-yang.svg' alt='Marble Yin Yang clip art'/>");
		$('#' + marbleId).removeClass('full');
		$('#' + marbleId).addClass('empty');
		$('#' + marbleId).html("");
		$spaceId = "";
		$marbleId = "";
		$space = "";
		$marble = "";
	}
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