/*a tag で#toのhrefを持つものをクリックするとスクロールアニメーションするよ*/
$(function(){
  $('a[href^="#to"]').on('click',function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#to" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/*トップへ戻るボタンがスクロールすると出てくるよ*/
$(function() {
  var topBtnfade = $(".totopbtn_fade");
    topBtnfade.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtnfade.fadeIn("1500",function(){
            $(this).addClass('translate');
        });
        } else {
            topBtnfade.fadeOut("1500");
        }
    });
});

/*クリックされたらclass activeが付与それ以外の要素からはclass activeが削除*/
var buttonslist =document.querySelectorAll("div.subs_row > div");
/*IE11ではquerySelectorAll で取得したものをforeachでループ処理できないためスライスして配列にする*/
var buttons = Array.prototype.slice.call(buttonslist,0); 
/*console.log(buttons);*/
buttons.forEach(function(button){
	/*console.log(button);*/
	button.addEventListener('click', function() {
		/*まずclass active を削除*/
		buttons.forEach(function(button) {
			button.classList.remove('active')
			});
			/*mug cup画像は対象外*/
			if(button.classList.contains('pic_subs_mug') == false){
				button.classList.add('active');
				/*余計なことはしないでね*/
				event.stopPropagation();
				}
			})
			})

/*画像以外クリックされたらclass activeが削除*/
var exceptbuttonslist = document.querySelectorAll('.inner,.area_itemdetail');
/*IE11ではquerySelectorAll で取得したものをforeachでループ処理できないためスライスして配列にする*/
var exceptbuttons = Array.prototype.slice.call(exceptbuttonslist,0);
/*console.log(exceptbuttons);*/
exceptbuttons.forEach(function(exceptbutton){
	exceptbutton.addEventListener('click', function(event){
		/*console.log("外側がclick!!");*/
		buttons.forEach(function(button) {
			button.classList.remove('active');
			/*console.log("remove!!");*/
			/*余計なことはしないでね*/
			event.stopPropagation();
			});
		});
	})