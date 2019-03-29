var CoffeeMachine=function(power) {
Machine.call(this);

 this.waterAmount = 0;
 this.power=power;

 var getBoilTime=function() {

   return 1000;

 };

 var onReady=function() {

   alert('coffee is ready!');

 };
 this.run = function() {

   // setTimeout - встроенная функция,

   // она запустит onReady через getBoilTime() миллисекунд

   setTimeout(onReady, getBoilTime());

};
var parentEnable=this.enable;
 this.enable=function(){
 	parentEnable.call(this);
 	//switch indicator
 	console.log('lights on!');
 };
 console.log('Created coffee machine with: ' + power + ' watts' );

};