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
		function getRendomInt(limits,startValue){
			var error=0;
			while(true){
				var i=Math.floor(Math.random()*limits+startValue);
				var j=Math.floor(Math.random()*limits+startValue);
				var answer=i*j;
				var product=parseInt(prompt("Производное "+i+" * "+j+" = "));
				if(product!=answer){
					error++;
				}
			}
		}
		
		var chousingLevel=prompt("Выберите сложность: низкая, средняя, высокая,все");
		switch(chousingLevel){
			case 'низкая':
				getRendomInt(2,1);
			case 'средняя':
				getRendomInt(5,3)
			case 'высокая':
				getRendomInt(9,4)
			case 'все':
				getRendomInt(1,9);
		}
		
}
	

	var task6=function(){
		
	}