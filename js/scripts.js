var a = document.getElementById('firstValue');
var b = document.getElementById('secondValue');


function Calculate()
{
	var aa = Number(a.value);
		console.log(aa);
	var bb = Number(b.value);
		console.log(bb);
		if(aa == 0 || bb == 0){
			document.getElementById("score").innerHTML="Źle wprowadzono dane";
		} else{
			var x = Math.round((aa/bb)*100);
				console.log(x);
				document.getElementById("score").innerHTML="<strong>Twoje spalanie wynośi: </strong><br />"+ x + " l/km";
					if (x > 20){
						LargeCombustion();
					}
		}
}

function LargeCombustion()
{
	alert("Oho Twoja fura sporo pali ;)");
}