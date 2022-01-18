// Here the value is stored in new variable x 

function myFunction() { 
	var x = 
		document.getElementById("myText").value;
		if (x==null){
			window.alert('fool')
		}
	
	document.getElementById( 
	"demo").innerHTML = x; 
} 