var Machine=function(){
    this._turned=false;
    var self=this;

    this.turnOn=function(){
       self._turned=true;
    };
    this.turnOff=function(){
        self._turned = false;
    };
};


var HomeAppliance=function(){
    Machine.call(this);
    this._pluged=false;
    var self=this;
    this.plugIn=function(){
        self._plunged=true;
        console.log('Pluged in! '+self._plunged);
    };
    this.plugOff=function(){
        self._pluged=false;
        console.log('Pluged of! '+self._plunged);
    };
};


var WashingMachine=function () {
    HomeAppliance.apply(this, arguments);
    var self=this;

    this.run=function(){
        if(self.plugIn){
            console.log('Washing is started!');
        }else{
            console.log('Plung in!');
        }
    };

};

WashingMachine.prototype=Object.create(HomeAppliance.prototype);

var LightSource=function(){
    HomeAppliance.apply(this, arguments);
  this.level;

  this.setLevel=function(level) {
      if (level > 1 && level <= 100) {
          this.level = level;
      }
  };

};

LightSource.prototype=Object.create(HomeAppliance.prototype);

var AutoVehicle=function(){
    Machine.call(this);

    this.x = 0;
    this.y = 0;

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
        //console.log('Machine is on a position of x: ' + this.x + " y: " + this.x);
    };

};

var Car=function(){
  AutoVehicle.call(this);
  var self=this;
  this.speed=10;

  this.setSpeed=function(speed){
    this.speed=speed;
  };
//метод run(x, y) - принимает два числа - координаты, в которые нужно переместиться.
// При вызове этого метода нужно будет 1 раз в секунду изменять координату позиции:
  //расчитать новые координаты с учетом скорости (к каждой текущей координате добавляется число,
    // записанное в свойство speed, но не более координаты пункта назначения).
    //
    // через вызов метода setPosition обновить координаты автомобиля
    //
    // остановить интервал, когда пункт назначения достигнут
  this.run=function(x,y){
   var interval=setInterval(function(){
      var newX=self.x+self.speed;
      var newY=self.y+self.speed;
      self.setPosition(newX,newY);
        if(self.x<=x && self.y<=y){
             clearInterval();
             console.log('The car is reached destination point!');
            }
        },1000);
  };

};

