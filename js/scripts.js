var a = document.getElementById('firstValue');
var b = document.getElementById('secondValue');
var c = document.getElementById('thirdValue');


function Calculate()
{
	var aa = parseFloat(a.value);
		console.log(aa);
	var bb = Number(b.value);
		console.log(bb);
	var cc = Number(c.value);
		console.log(cc);
		if(aa == 0 || bb == 0){
			document.getElementById("score").innerHTML="Źle wprowadzono dane";
		} else{
			var x = (Math.round((aa/bb)*100)).toFixed(2);
				console.log(x);
			var y = (Math.round(cc*x).toFixed(2));
				console.log(y);
					if (y > 0){
							document.getElementById("score").innerHTML="<strong>Twoje spalanie wynośi: </strong><br />"+ x + " l/km" + "<br /><br /> <strong>Koszt przejechania 100km wynosi:</strong> " + y + "zł";
						} else{
								document.getElementById("score").innerHTML="<strong>Twoje spalanie wynośi: </strong><br />"+ x + " l/km" ;
							}
			}
		
}


