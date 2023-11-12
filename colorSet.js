function LinksSetColor(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    //     while(i<alist.length){
    //         alist[i].style.color=color;
    //         i++;
    //     }
    $("a").css("color",color);
}

var Body={
    setBackgroundColor:function (color){
        //document.querySelector('body').style.backgroundColor = color;
        $("body").css("backgroundColor",color);
    }
}

function nightDayHandler(self){
    var target=document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        target.style.color='white';
        self.value='day';
        
        LinksSetColor('powderblue');
    }else{
        Body.setBackgroundColor('white');
        target.style.color='black';
        self.value='night';

        LinksSetColor('blue');
    }
}