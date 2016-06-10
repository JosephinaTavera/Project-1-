
$(document).ready(function()
{
	$('button').click(function() 
	{
		letsPlay();
	});
});

var letsPlay = function()
{

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
			doWeHaveWinner();
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


// Moving the marble
var letsMove = function(marbleId,spaceId)
{
	if ((spaceId - marbleId) === 10 || (marbleId - spaceId) === 10 || (spaceId - marbleId) === 12 || (marbleId - spaceId) === 12 || (spaceId - marbleId) === 14 || (marbleId - spaceId) === 14 || (spaceId - marbleId) === 16 || (marbleId - spaceId) === 16 || (spaceId - marbleId) === 17 || (marbleId - spaceId) === 17) 
	{
		alert('try again');
	}
	else if ((spaceId - marbleId) < 10 || (marbleId - spaceId) < 10) 
	{
		movingMarble(marbleId,spaceId);
	}
	else if ((spaceId - marbleId) > 10 || (marbleId - spaceId) > 10) {
		console.log('good move');
		movingMarble(marbleId,spaceId);
	}
}


var doWeHaveWinner = function()
{

	for (var i=67; i < 82; i++)
	{
 		var $title = $("#" + i).attr("title");
 		console.log($title);
		if ( $title === "player1")
		{
		movedAll += 1;
		}
	}
	weHaveWinner();

}


var weHaveWinner = function()
{
	if (movedAll === 15)
	{
		alert ('Player 1 is the winner');
	}	
}

var movingMarble = function(marbleId,spaceId)
{
	var $innerMarble = $('#' + marbleId).html();
	var $innerSpace = $('#' + spaceId).html();
	var $titleMarble = $("#" + marbleId).attr("title");
	$('#' + spaceId).removeClass('empty');
	$('#' + spaceId).addClass('full');
	$('#' + spaceId).html($innerMarble);
	$("#" + spaceId).attr("title", $titleMarble);
	$('#' + marbleId).removeClass('full');
	$('#' + marbleId).addClass('empty');
	$('#' + marbleId).html($innerSpace);
	$('#' + marbleId).removeAttr('title');
	resetVariables();
}

var resetVariables = function()
{
	$spaceId = "";
	$marbleId = "";
	$space = "";
	$marble = "";
	$titleMarble = "";
	movedAll = 0;
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