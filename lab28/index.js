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

			while(product=true){
				var num1=Math.floor(Math.random()*(max-min))+min;
				var num2=Math.floor(Math.random()*9)+1;
				var answer=num1*num2;
				var product=parseInt(prompt("Произведение "+num1+" * "+num2+" = "));
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

				for(var z=0;z<mixErrors.length;z++){
					if(mixErrors[z]==mixErrors[z+1]){
						counter++;
						console.log(mixErrors[z]+ " "+counter );
					}

			}

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
		
	}