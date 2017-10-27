// 雪花飘落
function snow(){
	var docWidth = document.documentElement.clientWidth;
	var docHeight = document.documentElement.clientHeight;
	console.log(docHeight);
	// initPage();
	function initPage(){
		containerWidth = $(".container").width();
		containerHeight = $(".container").height();
		initFloatAnimation()
	}

	function initFloatAnimation(){
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.id = 'floatCanvas';
		$(".container").append(canvas);
		canvas.width = containerWidth
		canvas.height = containerHeight;

		var particleNum = 100;
		var particles = [];
		for(var i=0;i<particleNum;i++){
			var particleObj = new Object();
			particleObj.x = Math.random()*docWidth;
			particleObj.y = Math.random()*docHeight;
			particleObj.vx = Math.random() * 0.4 - 0.2;
			particleObj.vy = (Math.random() * 0.8 + 0.2) * lib.flexible.dpr;
			particleObj.dw = particleObj.vy * 10;
			particleObj.dh = particleObj.dw;
			particles[i] = particleObj;

		}
		render()
		function render(){
			ctx.clearRect(0, 0, containerWidth, containerHeight);
			var particleObj,dx,dy;
			for(var j=0;j<particles.length;j++){
				particleObj = particles[j];
				if(particleObj.x < 0 || particleObj.x > containerWidth || particleObj.y > containerHeight){
					particleObj.x = Math.random() * containerWidth;
					particleObj.y = Math.random() * -200;
				}
				particleObj.x += particleObj.vx;
				particleObj.y += particleObj.vy;
				drawImage(ctx,img,particleObj.x,particleObj.y,particleObj.dw,particleObj.dh,1,0);
			}
			requestAnimationFrame(render);
		}
	}

	function drawImage(ctx, img, dx, dy, dw, dh, scale, angle) {
		ctx.save();
		ctx.translate(dx + dw / 2, dy + dh / 2);
		ctx.scale(scale, scale);
		ctx.rotate(angle);
		ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, -1 * dw / 2, -1 * dh / 2, dw, dh);
		ctx.restore();
	}
	var _base = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALnRSTlMArr2Dd6phklkuBYhdNo0yOmpFFZd/exkOCW4/VkqecqdlJh4Ro04jtVG5KpuwTP8QawAAArlJREFUOMuVlNmSsjAQhXUIIYGEhM0g+6Igou//ev9hsZwZay7+ruLuq3O6T7o5/H+5Z/cQRZfzOT3/DZ2jyHRc8Xmcxz76g7n0nHOpda5zqTg3509BNzWz0mVZDkMxFVMZytlcUve32chlODEmmKCUClaEuebd+BMyXOYDEy0NsqCuSZZRUbCcj5fvVNrLsBBtRjKSnBIrOZEsoGLQSkbfpEaVFzQghCQWyvMsK6kDysJcjm8lrmBHM3KyPN/3HccHCrlWwNS8KKN0yFqYeb4TV3FVxbHjexYhgRjkvLfmrk1lEAJztRvbbppr7HgJIS0LVb931elBBMSynMf1uJZt2wsGU1poHm1SvCxonVh+3NhAXlzlL54s3AZIOzmIzIJUtVK3++22YjE8M6FVdwYVcc0g5fmxDeh5/0Ldnke7iSEWiFKOKaieY0ACwweg29dWd6hVjnWqKZNm0yqhhQErUKvSqnZsFoq0g+wuC6VKaFm+c7WPz51BHe3HEgZluYowouGhCJCo0+yOe2MNKKteori4mBGOATktWvbz3Ra0kP+Wq7vOONH65DkPiN12qYWKHQxJi9XxYDo1tASNVfba/v2G77ik72NGMW1JuEZOYnnqRwOx5yJzB7U+EYIY0NZCjSpk6wshi+a4F3JA8xkddAdqe6JSoH9g2BobZnZzvWJ3EkiVsl8M1yzyYt1By4mxO9fq+oAdIg1oKHnk7rs6qm0LLQ+L6sTOtq01bilUJn3dYjTrSWDv1533EZOXnBYlkSPS93X0Ki9xHjXBAaFgRgCxKefRfuD7AFh9RmlN1sraIKBFoRXme5d7McAG2LYBBbFcd5nnyryR3XTmWheTEAxVsAnTjbD7XVHfzVLn5YRfShhikU0Ku49y3bSbuVKSK87n/tXSJ5deTGd6E6XpT7NPQffwKfIPFOtCNONyh58AAAAASUVORK5CYII="
	// var _base = 'images/snow.png';
	var img = new Image();

	img.onload = function(){
		initPage();
	}
	img.src = _base;
}




function loading(){
	var $bar=$(".bar");
	var $barWidth=$bar.width();
	var $gap=$(".progress").width();
	var $num =$(".num").text()
	var timer;
	console.log($(".progress").width())
	console.log($bar.width())
	timer = setInterval(function(){
		if($barWidth<$gap){
			$barWidth++
			$(".bar").width($barWidth)
			$(".num").text(parseInt($barWidth/$gap*100)+'%')
		}else{
			clearInterval(timer);
			$(".loading_page").addClass('none')
		}
	},12)
 }
function swiper(){
	var swiperjiemo = new Swiper('#jiemoswiper',{
		direction: 'vertical',
		onTransitionEnd:function(swiper){
            if(swiper.activeIndex == 1){
                console.log("20161121_paster*index*scroll");
                $(".part").addClass("part_active")
            }
        }
	})
}
function active(){
	setInterval(function(){
	  var rand = parseInt(Math.random()*10)
	  $(".item").eq(rand).addClass("active").siblings().removeClass('active')
	},1000)

}
$(function(){
	snow();
	loading();
	swiper();
	active();
})
