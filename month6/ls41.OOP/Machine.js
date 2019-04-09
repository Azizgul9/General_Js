var Machine=function() {
    //var enabled=false;
 this._enabled = false; //Psevdo privatnye peremennye
 var self=this;
 

 this.enable = function() {

   self._enabled = true;//syuda
     // ne prenositsya iz verhnego
     //konteksta
     //potomu this sohranili v self

 };

 

 this.disable = function() {

   self._enabled = false;

 };

}

