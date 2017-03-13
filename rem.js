/***********响应式计算计算**************/
var mresize=function(){
    var view_width =window.innerWidth;
    var path=$('html').css('font-size');
    path=path.substring(0,path.length-2);
    var n =view_width/path;
    $('html').css('font-size',n+"px");
};
mresize();
