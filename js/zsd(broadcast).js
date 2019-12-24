	var box = document.getElementById("box");
	var Navlist = document.getElementById("nav").children;
	var slider = document.getElementById("slider");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var index = 1;
	var isMoving = false;
	//轮播函数(后移)
	function next(){
		index++;
		navChange();
		animate(slider,{left:-822*index},function(){
			if (index==4){
				slider.style.left = "-822px";
				index = 1;
			}
		});
	}
	//轮播函数(前移)
	function prev(){
		index--;
		navChange();
		animate(slider,{left:-822*index},function(){
			if (index==0){
				slider.style.left = "-2469px";
				index = 3;
			}
		});
	}
	var timer = setInterval(next,3000);
	//鼠标移入
	box.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	//鼠标移出
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
	//左右按钮点击
	right.onclick = next;
	left.onclick = prev;
	//小按钮图片点击切换
	for (var i=0;i<Navlist.length;++i){
		Navlist[i].idx = i;
		navChange();
		Navlist[i].onclick = function(){
			index = this.idx+1;
			navChange();
			animate(slider,{left:-822*index});
		}
	}
	//小按钮点击自身切换
	function navChange(){
		for (var j=0;j<Navlist.length;++j){
			Navlist[j].className = '';
		}
		if (index==4){
			Navlist[0].className = "active";
		}
		else if (index==0){
			Navlist[2].className = "active";
		}
		else {
			Navlist[index-1].className = "active";
		}
	}