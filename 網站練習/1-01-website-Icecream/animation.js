$(document).ready(function () {
    
    /*--------------------
        Navbar變色(捲軸滾動超過jumbotron範圍之後)
    --------------------*/
    $(window).scroll(function(){
        scrolledPx = $(this).scrollTop();
        if (scrolledPx >= 580){ 
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active'); 
        }
    });

    /*--------------------
        Parellax視差滾動效果
    --------------------*/
    var rellax = new Rellax('.rellax', {
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    /*--------------------
        animate 進場動畫
    --------------------*/
    ScrollReveal().reveal('.animate',{
        origin: 'bottom', //進場初始方向
        distance: '50px', //移動距離(可用單位:px,em,%)
        delay: 300, //延遲開始播放 (1000=1s)
        duration: 800, //動畫持續時間
        reset: true, //重複播放(卷軸回頭時)
        easing:'ease-in', //速度(漸慢,漸快,等速...)	
    });

});