	function task1(){
		var yodaSays = ["on JavaScript", "programming ", "I like "];
		var t=yodaSays[2]+" "+yodaSays[1]+" "+yodaSays[0];
		document.querySelector('.task1').innerHTML=t;
	}

	function task2(){
		var duck={
			name:'Donald',
			color:'white',
			age:1
		};
		console.log("My name is "+duck.name+".\nI am "+duck.age+" year old.\nMy color is "+duck.color);
	}

	function task3(){
		var login=prompt("Please enter your login:");

		if(login=="admin"){
			var password=prompt("Enter your password");
			if(password=="BlackOverlord"){
				alert("welcome!");
			}
			else if(password==false || password==null){
				alert("Login canseled");
			}
			else{
				alert("Wrong password");
			}
		}
		else if(login==false || login==null){
			alert("Login canseled");
		}
		else if(login!="admin"){
			alert("unknown user");
		}

	}

	function task4(){
		var drinks=['milk', 'beer', 'beer', 'milk', 'milk'];

		for(var i=0;i<drinks.length;i++){
			switch(drinks[i]){
				case 'milk':
				console.log("good");
				break;
				case 'beer':
				console.log("bad");
				break;
			}
		}

	}

	function task5(){
		var string='';

		for(var i=0;i<7;i++){
			for(var j=0;j<20;j++){
				string+='&';
			}
			string+="\n";
		}
		alert(string);
	}

	var task6=function(){
		var hours;
		var min=60;
		var second=60;
		var seconds=parseInt(prompt("Введите часы в секундах от 0 до 28800 :"));
		
		if(seconds>28800 || seconds<0){
			seconds=parseInt(prompt("Введите заново правильное время в секундах от 0 до 28800 :"));
		}
		else if(seconds<=28800 && seconds>=0){
			hours=seconds;
			hours/=min*second;
			hours=Math.floor(hours);
			if(hours>4){
				alert(seconds+"\nОсталось "+hours+" часов");
			}
			else if(hours<=4 && hours>1){
				alert(seconds+"\nОсталось "+hours+" часа")
			}
			else if(hours=1){
				alert(seconds+"\nОстался "+hours+" час")
			}
			else{
				alert(seconds+"\nОсталось менее часа");
			}
		}
		
	}

	var task7=function(){
		var i=Math.floor(Math.random()*9)+1;
		var j=Math.floor(Math.random()*9)+1;
		var answer=i*j;
		x=parseInt(prompt("Result of "+i+" * "+j+" = "));

		if(x==answer){
			alert("You are correct!");
		}
		else{
			alert("You are wrong!");
		}

	}