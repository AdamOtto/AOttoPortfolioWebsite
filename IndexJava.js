function LoadNewPage(destination){
	//document.getElementById("Body").innerHTML='<object type="text/html" data="' + destination + '" ></object>';
	
	//document.getElementById("bodyHTML").src = destination;
	var t = document.getElementById("Body");
	t.style.opacity = 0;
	setTimeout(function(){ 
		document.getElementById("bodyHTML").src = destination;
	}, 400);
	setTimeout(function(){
		t.style.opacity = 1;
	}, 450);
}