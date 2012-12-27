(function(){
	var canvas = document.querySelector( 'canvas' )
		, ctx = canvas.getContext( '2d' );
			
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var mouse = { x: canvas.width / 2, y: canvas.height / 2, down: false };
	
	var index = 0
		, disableEvents = false
		, word = '';
		
	var quotesList = [];
	
	var text = chooseRandomQuote();
		   
	var textArray = text.split(' ');
	
	canvas.addEventListener('mousedown', mousedown, false);
	
	function mousedown(ev){
		if ( !disableEvents ){
			mouse.x = ev.pageX;
			mouse.y = ev.pageY 
		}	
		
		mouse.down = true;
		draw();
	}
	
	function chooseRandomQuote(){
		for( quote in quotes ) {
			if(quotes.hasOwnProperty(quote)){
				quotesList.push(quotes[quote]);
			}
		}
	
		return quotesList[Math.round(Math.random()*quotesList.length)];
	}
	
	function draw(){
		if(mouse.down){
			word = textArray[index] == undefined ? "Charles Bukowsky" 
				: textArray[index]; 
			ctx.fillStyle = "white";
			
			if( word !== 'Charles Bukowsky' ){
				ctx.font = 10+Math.round(Math.random()*20) + 'pt Georgia';
				ctx.fillText(word, mouse.x + 10, mouse.y + 10);
				index++;
			} else {
				ctx.font = '50pt Georgia';
				var width = ctx.measureText( word ).width;
				ctx.fillText(word, (canvas.width / 2) - width / 2, canvas.height / 2);
				console.log(width);
				disableEvents = true;
			}
		}
	}	
})();