var task1=function(){
	var num1=parseInt(prompt("enter num1: "));
	var num2=parseInt(prompt("enter num2: "));
	if(num1>num2){
		alert("первое число больше второго");
	}
	else if(num1<num2){
		alert("первое число меньше второго.");
	}
	else if(num1==num2){
		alert("числа равны ");
	}
	else{
		alert("enter enything!")
	}}

	function task2(){
		var star='';
		var string=prompt("Enter any message");
		var output='* '+string+' *\n';

		for(var i=0;i<output.length;i++){
			star+="*";
		}

		star+="\n";
		alert(star+output+star);
	}

	var task3=function(){
		var current_year=2018;
		var month=12;
		var days=365;
		if(current_year%4==0){
			days=366;
		}
		var hours=days*24;
		var minutes=hours*60;
		var seconds=minutes*60;
		var year=parseInt(prompt("Сколько вам лет?"));
		month*=year;
		days*=year;
		hours*=year;
		minutes*=year;
		seconds*=year;
		alert("Вы прожили "+month+" месяцев\n"+
			hours+" часов\n"+minutes+" минут\n"+seconds+" секунд") 
	}

	var task4=function(){
		var total=0;
		var numbers=[];
		var average=0;
		while(true){
			var number=prompt("Введите число 0т 0 до 100: ");

			if(number>=1 || number<=100){
				numbers.push(parseInt(number));
			}
			else if(number===null){
				break;
			}

			for (var i = 0;i<numbers.length;i++) {
				total+=numbers[i];
			}
			average=total/numbers.length;
			
		}

		alert("Количество введенных чисел: "+numbers.length+"\n"+"среднее арифметическое: "+average);
	}

	var task5=function(){
		
		function getRendomInt(max,min){
			var mixErrors=[];
			var counter=0;
			var counterInSimilarErrors=0;

			while(true){
				var num1=Math.floor(Math.random()*(max-min))+min;
				var num2=Math.floor(Math.random()*9)+1;
				var answer=num1*num2;
				var product=prompt("Произведение "+num1+" * "+num2+" = ");
				if(product===null){
					break;
				}
				else if(product!=answer){
					mixErrors.push(num1);
					mixErrors.push(num2);
				} 
				else{
					alert("Молодец!")
				}

				/*for(var z=0;z<mixErrors.length;z++){
					if(mixErrors[z]==mixErrors[z+1]){
						counterInSimilarErrors=z;
						counter++;
						alert(counterInSimilarErrors+ " "+counter);
					}
					}
					*/

				}

			}

			
			var chousingLevel=prompt("Выберите сложность: низкая, средняя, высокая,все");
			switch(chousingLevel){
				case 'низкая':
				getRendomInt(2,1);
				case 'средняя':
				getRendomInt(6,3)
				case 'высокая':
				getRendomInt(9,3)
				case 'все':
				getRendomInt(9,1);
			}
			
		}
		

		var task6=function(){
			
			var border={
				x:12,
				y:6
			};
			var xCordinata=prompt("Введите координату х: ");
			var yCordinata=prompt("Введите координату y: ");

			if (xCordinata==border.x && (yCordinata<=border.y || yCordinata>=border.y)) {
				alert("border");
			}
			else if (yCordinata==border.y && (xCordinata<=border.x || xCordinata>=border.x)) {
				alert("border");}
				else if (xCordinata>border.x && yCordinata>border.y){
					alert("NE");
				}
				else if(xCordinata>border.x && yCordinata<border.y){
					alert("SE");
				}
				else if(xCordinata<border.x && yCordinata<border.y){
					alert("WS");
				}
				else if(xCordinata<border.x && yCordinata>border.y){
					alert("NW");
				}


			}

			var task7=function(){
				// var groupsCounter = [];
				// for ( var i = 0; i < 10; i++){
				// 	groupsCounter[i] = 0;
				// }
				// for (var i = 0; i < 100000; i++){
				// 	var randNum = Math.floor(Math.random() * 100);
				// 	groupsCounter[Math.floor(randNum/10)]++;
				// }
				// console.log('Number of samples: ' + 100000);
				// for ( var i = 0; i< 10;i++){
				// 	console.log("Group " + (i * 10) + " - "  + (i * 10 + 9) + ": " + groupsCounter[i]);
				// }
				var samplesNum=100000;
				var groups=[0,0,0,0,0,0,0,0,0,0];
				for(var i=0;i<samplesNum;i++){
					var number=Math.floor(Math.random()*100);
					//0 - 9
					//10 - 19
					//20 - 29
					//30 - 39
					var tens=Math.floor(number/10);
					//console.log(number,tens);
					groups[tens]++;
				}
				console.log('Total samples: ',samplesNum);
				for(var j=0;j<groups.length;j++){
					var groupStart=(j*10);
					var groupEnd=groupStart+9;
					console.log('Group start '+groupStart+' - '+groupEnd+': ',groups[j]);

				}

			};

var task5B=function(){

var getRendomNumber=function(max,min,exception){
	var number;
	while(true){
	 number=Math.floor(Math.random()*(max-min+1))+min;
	var foundException=false;
	for(var i=0;i<exception.length;i++){
		if(number===exception[i]){
			foundException=true;
		}
	}
	if(!foundException){
		break;
	}
}
	return number;
};

	var correctAnswer=0;
	var questionsNumber=0;
	var errors={};

while(true){
	var number1=getRendomNumber(3,9,[5]);
	var number2=getRendomNumber(3,9,[5]);
	
	var answer=prompt('What is '+number1+' * '+number2+' ?');
	questionsNumber++;

	if(answer===null){
		break;
	}

	answer=parseInt(answer);
	var correctAnswer=number1*number2;

	if(answer===correctAnswer){
		alert('You are right!');
		correctAnswer++;
	}
	else{
		if(errors[number1]){
			
		}
		if(number1===number2){
			errors[number1 - 1]++;
		}
		else{
		errors[number1 - 1]++;
		errors[number2-1]++;}
		alert("You are wrong!Correct answer is "+correctAnswer);
	}

}
var message='';

		for(var j=0;j<errors.length;j++){
			if(errors[j]>0){
				var number=j+1;				
				message+="В таблице на "+ number + " у вас "+ errors[j]+" ошибок\n";
				
			}
		}
		alert(message);
};