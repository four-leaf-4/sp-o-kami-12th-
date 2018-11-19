var imgslist = document.querySelectorAll("div.subs_row img");
/*IE11ではquerySelectorAll で取得したものをforeachでループ処理できないためスライスして配列にする*/
var imgs = Array.prototype.slice.call(imgslist,0); 
/*console.log(imgs);*/
imgs.forEach(function(img){
	/*console.log(img);*/
	img.addEventListener('click', function() {
		
		var target= img.src;
		var id = img.dataset.id;
		var image;
		console.log(id);	
		switch(id ){
			case "glassdish":
			image = document.getElementById('display_glassdish');
			image.src = target;
			break;
			case "hashioki":
			image = document.getElementById('display_hashioki');
			image.src = target;
			break;
			case "kanzashi":
			image = document.getElementById('display_kanzashi');
			image.src = target;
			break;
			case "sensu":
			image = document.getElementById('display_sensu');
			image.src = target;
			break;
			case "smartphonecover":
			image = document.getElementById('display_smartphonecover');
			image.src = target;
			break;
			case "tissuecover":
			image = document.getElementById('display_tissuecover');
			image.src = target;
			break;
			case "handmirror":
			image = document.getElementById('display_handmirror');
			image.src = target;
			break;
			}

			})
			})