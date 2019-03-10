var task6=function(){

    var Circle={
        color:['blue','yellow','green','red','black'],
        colorRendom:function(){
            var l=this.color;
            var colorNum=Math.floor(Math.random()*l.length);
            return (this.color[colorNum]);
        },
        diametr:function(max,min){
            var d=(Math.floor(Math.random() * (max - min)) + min+'px');
            return(d);
        },
        positionX:function(){
            var w = window.innerWidth;
            var positionX=Math.floor(Math.random() * (w - 1)) + 1+'px';
            return (positionX);
        },
        positionY:function(){
            var h = window.innerHeight;
            var positionY=Math.floor(Math.random() * (h - 1)) + 1+'px';
            return (positionY);
        }

    };

    
    var  drawCircles=function(quantity,maxD,minD){
        var body=$('body');
        for (var i=0;i<quantity;i++){

            var circleColor=Circle.colorRendom();
            console.log(circleColor);
            var circleDiametr=Circle.diametr(maxD,minD);
            var circlePosX=Circle.positionX();
            var circlePosY=Circle.positionY();


            var circle=$('<div>');
            circle.addClass('Circle');
            circle.css({
                display: 'inline-block',
                borderRadius: '50%',
                backgroundColor:circleColor,
                width:circleDiametr,
                height:circleDiametr,
                top: circlePosY,
                left:circlePosX
            });
            body.append(circle);
        }
    };
    drawCircles(20,200,50);
};
