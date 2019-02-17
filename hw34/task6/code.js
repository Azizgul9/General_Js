var task6=function(){

    var Circle={
        color:['blue','yellow','green','red','black'],
        colorRendom:function(){
            var l=this.color;
            var colorNum=Math.floor(Math.random()*l.length)+1;
            return ('background :'+this.color[colorNum]);
            },
        diametr:function(max,min){
            var d=(Math.floor(Math.random() * (max - min)) + min+'px');
            return('width:'+d+', height:'+d+',display: inline-block,borderRadius: 50%,border: 1px solid #000');
        },
        position:function(){
            var w = window.innerWidth;
            var h = window.innerHeight;
            var positionX=Math.floor(Math.random() * (w - 1)) + 1+'px';
            var positionY=Math.floor(Math.random() * (h - 1)) + 1+'px';
            return ('top:'+positionX+',left :'+positionY);
        }
    };


    var  drawCircles=function(quantity){
        var body=$('body');
       // for (var i=0;i<quantity;i++){
            var circleStyles=Circle.colorRendom()+','+Circle.diametr(200,50)+','+Circle.position();
            console.log(circleStyles);
            var circle=$('<div>');
            circle.addClass('Circle');
            circle.css({circleStyles});
            body.append(circle);
       // }
    };
    drawCircles(20);
};
