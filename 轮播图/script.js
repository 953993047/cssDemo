//注意在每个四张图片在首尾第0张的时候和第4张交换的时候用条件判断
//情况1在自动播放2在手动点击左右播放
//setInterval定时的时候前面函数加()会立即执行不加就有问题
var wrap = document.getElementById('wrap'),
	pic = document.getElementById('pic').getElementsByTagName("li"),
	index = 0;

// 定义图片切换函数
function changePic(curIndex) {
	for (var i = 0; i < pic.length; ++i) {
		pic[i].style.display = "none";
	}
	pic[curIndex].style.display = "block";
}

// 定义并调用自动播放函数
function autoPlay() {
	
	changePic(index++);
	if (index == 4) index = 0;
}
var timer = setInterval(autoPlay(), 2000);

// 鼠标划过整个容器时停止自动播放
wrap.onmouseover = function() {
	clearInterval(timer);
	// 鼠标离开整个容器时继续播放至下一张
	wrap.onmouseout = function() {
		timer = setInterval(autoPlay, 2000);
	}
}

//左右键控制
	var left = document.querySelector(".left");
	var right = document.querySelector(".right");

	left.onclick = function() {
		if (index == 0) {
			index = 3;
		} else
			index -= 1;
		console.log(index);
		changePic(index);
	}
	right.onclick = function() {
		if (index == 3) {
			index = 0;
		} else index += 1;
		console.log(index);
		changePic(index);
	}