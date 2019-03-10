var task1=function(){
		var convert=function(C){
			var F=(C*9/5)+32;
			return F;
		};

		var converter=convert(parseInt(prompt('Enter a teperature: ')));
		console.log(converter);
};

var task2=function(){
	 var numberValidator=function(number){
	 		if(number===null){
	 			return "You have entered cancel!";
	 		}
	 		else if(isNaN(number)){
	 			return "It's not a number!";
	 		}
	 		else if(!number){
	 			return "You haven't entered a number!";
	 		}
	 		else if( number>0){
	 			return "You have entered a positive number!";
	 		}
	 		else if( number<0){
	 			return "You have entered a negative number!";
	 		}
	 		else if( number==='0'){//pravilno li tak?
	 			return "You have entered zero!";
	 		}
	 		
	 };

	 var checkEnteredNumber=numberValidator(prompt('Enter a : '));
	 console.log(checkEnteredNumber);
};

var task3=function(){
		var power=function(a,b){
			console.log(b);
			if(!b){
				b=2;
			}
			var product=1;
			for(var i=1;i<=b;i++){
				product*=a;
			}
			return product;
		};

		var mathPower=power(2,3);
		console.log(mathPower);
};

var task4=function(){
		var countChars=function(charecter,string){
			 charecter=charecter.toLowerCase();
			 string=string.toLowerCase();
			var count=0;
			for(i=0;i<=string.length;i++){
				if(charecter===string[i]){
					count++;
				}
			}
			return ("The quantity of \'"+charecter+ '\' is '+count);
		};

		var check=countChars('f','adfshg');
		console.log(check);
};

var task5=function(){
		var temperatureGenerator=function(a,max,min){
			for(var t=0;t<7;t++){
				a.push(Math.floor(Math.random()*(max-min+1))+min);
			}
			return a;
		}
		var southData=[];
		var eastData=[];
		var westData=[];
		var northData=[];
		//var check=temperatureGenerator(southData,25,17);
		/*var southData = [13, 15, 19, 26, 21, 22, 23];
		var westData = [15, 14, 16, 18, 17, 24, 25];
		var eastData = [20, 17, 19, 15, 24, 25, 26];
		var northData = [19, 18, 23, 20, 23, 19, 31];*/

		var getAverageTemperature=function(s,w,e,n){
			var conjunction=s.concat(w,e,n);
			//console.log(conjunction);
			var sum=0;
			for(var i=0;i<conjunction.length;i++){
				sum+=conjunction[i];
			}
			var average=sum/conjunction.length;
			return("Average temperature is: "+average);
		} 

		 var check=getAverageTemperature(temperatureGenerator(southData,25,17),temperatureGenerator(westData,25,17),temperatureGenerator(eastData,25,17),temperatureGenerator(northData,25,17));
		console.log(check);
};

