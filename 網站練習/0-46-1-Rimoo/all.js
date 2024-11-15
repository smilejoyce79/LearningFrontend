//Custom & initialization

$(document).ready(function(){  //網頁狀態ready(載入完成)時

	// ---導覽列動畫: 隨著頁面滾動,顯示使用者正處於哪個區塊段落---
	$(window).scroll(function(){  //偵測視窗scroll(滾動)行為
		scrolledPx = $(this).scrollTop(); //存入變數=視窗滾動與上方距離的Px值
		// console.log(scrollPx)
		if (scrolledPx >= 200){ 
			$('.navbar').addClass('active'); // 加上 "active" class
		} else {
			$('.navbar').removeClass('active'); // 移除 "active" class
		}
	})

	// ---註8:漢堡選單動畫: 在RWD小尺寸的介面時，點一下漢堡icon會變成叉叉&彈出導覽列選單---
	$('.menu-toggle').on('click', function(){
		$(this).toggleClass('active'); //toggleClass有就拿掉,沒有就新增
		$('.navbar .nav').toggleClass('active');
	})
	// 接著點一下選單項目後,隱藏選單
	$('.nav-link').on('click', function(){
		$('.menu-toggle').removeClass('active');
		$('.navbar .nav').removeClass('active');
	})

	// ---註9:輪播插件 owl-carousel initialization---
	$('.owl-carousel').owlCarousel({
		responsive:{  //響應式效果 設定各斷點要顯示的項目個數
			0:{
				items: 2
			},
			769:{
				items: 4
			}
		},
		nav: true,   //顯示左右鍵
		margin: 32,  //項目右邊的間距
		// 方法二: 利用插件的option設定左右鍵文字
		navText: ["pre","nex"],
		// autoplay: true,  //自動撥放
		// autoplayTimeout: 1000,  //每隔1s出現下一張
		// loop: true
	})

	// ---影片插件: vide initialization---
	$('.jumbotron-video').vide({
		'mp4': 'video/bg.mp4',
		'webm': 'video/bg.webm',
		'ogv': 'video/bg.ogv',
		'poster': 'images/bg/bg001.jpg'
	},{
		posterType: 'none', //不需逐一檢測圖片檔案類型
		// loop: false, //重複循環撥放
	})

	// ---註10:視差滾動效果 Rellax: 遠景滾動速度較慢---
	var rellax = new Rellax('.rellax', {
		center: true  //改變網頁頂端的起始位置(基準線),使物件如期定位
	});

	// ---註11:燈箱插件LightBox:點圖可以進入圖片庫放大檢視---
	$('[data-fancybox="gallery"]').fancybox({
		loop: true,  //重複循環
		arrows:true,    //左右切換按鈕
		keyboard:true,  //支援鍵盤切換
		buttons: [
			"zoom",       //放大縮小
			"share",      //分享
			"slideShow",  //預覽窗格
			"fullScreen", //全螢幕
			"download",   //下載
			"thumbs",    //縮圖清單窗格
			"close"    //關閉視窗鈕
		],
		infobar: false,  //左上角的頁次註記
		// hideScrollbar: true  //隱藏網頁捲軸
	})

	// ----=進場效果scrollreveal---
	ScrollReveal().reveal('.js-fadeInBottom',{
		origin: 'bottom', //進場初始方向
		distance: '50px', //移動距離(可用單位:px,em,%)
		delay: 300, //延遲開始播放 (1000=1s)
		duration: 800, //動畫持續時間
		// reset: true //重複播放(卷軸回頭時)
		// easing:'ease-in', //速度(漸慢,漸快,等速...)
		rotate:{x:8,z:8},  //旋轉(單位degree度量)
		scale:1.5,   //縮放		
	});
	ScrollReveal().reveal('.js-fadeInLeft',{
		origin: 'left',
		distance: '50px',
		delay: 300,
		duration: 800
		// reset: true
	});
	ScrollReveal().reveal('.js-fadeInRight',{
		origin: 'right',
		distance: '50px',
		delay: 300,
		duration: 800
		// reset: true
	});
	ScrollReveal().reveal('.service-item',{
		origin: 'bottom',
		distance: '50px',
		duration: 800,
		interval: 300 //與同class(群組)的下一個動畫間隔時間
		// reset: true
	});

	// ---OnePageNav---
	// 單頁式網站的滾動效果:點擊導覽列item後，會有滾動的動畫效果至那個項目的區塊(因有html架構中的#id串聯定位)
	$('.js-onePageNav').onePageNav({
		currentClass: 'active', //註12:隨著捲軸滾動,會在對應的id加上class="active"
        filter:':not(#login):not(#logout)' //排除id="login"和id="logout"不用(因這2個沒有href連結)
	})

	// ---註14 點一下Read more按鈕,會展開隱藏的文字,且按鈕消失---
	$('.btn-more').on('click', function () {
		$(this).parent('.preview').addClass('active');
		$(this).css('display','none')
	});

})