$(document).ready(function(){
	var number=$('.number');
	var numberI=number.text();
		var rad=setInterval(function(){
			console.log(numberI);
			numberI++;
			number.html(numberI);
			if(numberI>=100){
				clearInterval(rad);
			}
		},20);
		

	
	

});