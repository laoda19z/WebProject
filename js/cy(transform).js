 var img = document.getElementsByClassName("i1");
 var temp;
 var temp1;
 var src;
 var src1;
 for(var i = 0;i<img.length;++i){
        img[i].onmouseover = function(){
        temp = this.attributes["index"].nodeValue;
        src = this.attributes["src"].nodeValue;
        if(this.attributes["index"].nodeValue == "0") return;
        temp1 = temp;
        src1 = src;
        var that = this;
        setTimeout(function(){
            var width = 180;
            var intervalId = setInterval(function () {
                width-=10;
                that.style.width = width+"px";
                if(width==0) clearTimeout(intervalId);
         }, 30);
         setTimeout(function(){
            that.src = "images/cy"+temp+".jpg";
            that.setAttribute("index","0");
            var intervalId1 = setInterval(function(){
                width+=10;
                that.style.width = width+"px";
                if(width==180) clearTimeout(intervalId1);
            }, 30);
         }, 540);
         
        }, 500);
        
    }
}
for(var i = 0;i<img.length;++i){
   
    img[i].onmouseout = function(){
        if(this.attributes["index"].nodeValue == temp1) return;
           var that = this;
           var width = 180;
           var intervalId = setInterval(function () {
               width-=10;
               that.style.width = width+"px";
               if(width==0) {clearTimeout(intervalId);
                   that.src = src1;
                   that.setAttribute("index",temp1);
                   var intervalId1 = setInterval(function(){
                       width+=10;
                       that.style.width = width+"px";
                       if(width==180) clearTimeout(intervalId1);
                   }, 30);
               }
               
        }, 30)
       
   }
}