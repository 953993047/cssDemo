
/*
注意页面如果有多个window.onload会覆盖
使用方法
1. <img src="" data-img="https://wx3.sinaimg.cn/mw690/6a2afec3ly1fz33wbd4xmj24002o0u0y.jpg" alt="" class="lazyload">
如1所示添加img  src值为loading图片，data-img为图片的原值，添加lazyload  class
2.引入此js文件

====展望：1.没有监听resize事件和优化scroll事件
		  2.判断元素是否在视口内部的方法也许不全面或者还有其他方法，不是兼容性写法
 */
 window.onload=function(){
        var timer;
        var imgs=document.getElementsByClassName('lazyload');
        var windowH =document.documentElement.clientHeight || document.body.clientHeight|| window.innerHeight ;
        loading();
        window.onscroll = function() {
            if(!imgs.length){
                window.scroll=null;
            }else{
                loading();
            }
        }
        function loading() {
            imgs=document.getElementsByClassName('lazyload');
            for (var i = 0; i < imgs.length; i++) {
                if(imgs[i].getBoundingClientRect().bottom>0&&
                    imgs[i].getBoundingClientRect().top<windowH){
                     imgs[i].src = imgs[i].getAttribute('data-img');
                     imgs[i].classList.remove('lazyload');
                }
            }
        }
    };
 //这是我在github上找的一个jquery懒加载的例子，可供参考https://github.com/mishe/lazyload
// (function($){
//     $.extend($,{
//         imgLazyLoad:function(){
//             var timer,
//                 len = $('img.lazyload').length;
//             function getPos(node) {
//                 var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
//                     scrollt = document.documentElement.scrollTop || document.body.scrollTop;
//                     //页面被卷去的高度
//                 var pos = node.getBoundingClientRect();
//                 return {top:pos.top + scrollt, right:pos.right + scrollx, bottom:pos.bottom + scrollt, left:pos.left + scrollx }
//             }
//             function loading(){
//                 timer && clearTimeout(timer);
//                 timer = setTimeout(function(){
//                     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
//                         imgs=$('img.lazyload');
//                     screenHeight = document.documentElement.clientHeight;
//                     for(var i = 0;i < imgs.length;i++){
//                         var pos = getPos(imgs[i]),
//                             posT = pos.top,
//                             posB = pos.bottom,
//                             screenTop = screenHeight+scrollTop;
//                         if((posT > scrollTop && posT <  screenTop) || (posB > scrollTop && posB < screenTop)){
//                             imgs[i].src = imgs[i].getAttribute('data-img');
//                             $(imgs[i]).removeClass('lazyload');
//                         }else{
//                             // new Image().src = imgs[i].getAttribute('data-img');
//                         }
//                     }
//                 },100);
//             }
//             if(!len) return;
//             loading();
//             $(window).on('scroll resize',function(){
//                 if(!$('img.lazyload').length){
//                     return;
//                 }else{
//                     loading();
//                 }
//             })
//         }
//     })
// })($||Zepto||jQuery);