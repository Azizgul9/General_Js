var Observer = function(){
    this.listeners={};
};

Observer.prototype.on=function(type,listener){

    if(!this.listeners[type]){
        this.listeners[type]=[];
    }
    this.listeners[type].push(listener);
};
Observer.prototype.off=function(type, listener){
    if(this.listeners[type]){
        var listenerIndex=this.listeners[type].indexOf(listener);
        if(listenerIndex!== -1){
            this.listeners[type].splice(listenerIndex,1);
        }
    }
};
//zapuskaet sobytiye
Observer.prototype.trigger=function(type,event){
    if(this.listeners[type]){
        this.listeners[type].forEach(function(listener){
            listener(event);
        });
    }
};