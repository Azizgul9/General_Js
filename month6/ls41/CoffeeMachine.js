var CoffeeMachine=function(power) {
Machine.call(this);// Vyzyvaetsya machine.
// V kachestve this peredayetsya  etot obyekt

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
 //this.enable=function(){}
 //raswireniye enabled
var parentEnable=this.enable; // sdes sohronyaem staryi
 this.enable=function(){
 	parentEnable.call(this);//esli my hotim
     // chtob on delal ne tolko prejnyu funktsiyu
 	//switch indicator
 	console.log('lights on!');// pereopredelyayem na novyi
 };
 console.log('Created coffee machine with: ' + power + ' watts' );

};