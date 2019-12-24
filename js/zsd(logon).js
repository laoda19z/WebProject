		// 注册框js
		var inpList = document.getElementsByClassName("inp");
		var strList = ['zAZfB','ZEhUN','zFC9H','zhWY9','Zin4c','ZITGj','zJ6iV','zjsKP','ZKc9S','zKDXU'];
		var btn = document.getElementsByTagName("button");
		var a=0,b=0;
		var inp1="";
		var inp2="";
		inpList[0].onfocus = function(){
			inpList[0].nextElementSibling.innerHTML="请输入4-10位用户名";
		}
		inpList[0].onblur = function(){
			a = inpList[0].value.length;
			inpList[0].nextElementSibling.innerHTML="";
		}
		inpList[1].onfocus = function(){
			inpList[1].nextElementSibling.innerHTML="请输入6-12位密码";
		}
		inpList[1].onblur = function(){
			inp1 = inpList[1].value;
			b = inpList[1].value.length
			inpList[1].nextElementSibling.innerHTML="";
		}
		inpList[2].onfocus = function(){
			inpList[2].nextElementSibling.innerHTML="请输入6-12位密码";
		}
		inpList[2].onblur = function(){
			var inp2 = inpList[2].value;
			b = inpList[2].value.length
			inpList[2].nextElementSibling.innerHTML="";
		}
		
		var t0 = true;
		var str1 = "";
		var str2 = "";
		btn[0].onclick = function(){
			var d =  Math.floor(Math.random()*10);
			var img = document.createElement("img");
			img.setAttribute("src","images/"+strList[d]+".jpg");
			if (t0){
				this.parentNode.nextElementSibling.appendChild(img);
				t0=false;
			}
			else {
				var img0 = this.parentNode.nextElementSibling.firstElementChild;
				img0.setAttribute("src","images/"+strList[d]+".jpg");
			}
			str1=strList[d];
		}
		inpList[3].onblur = function(){
			str2 = inpList[3].value;
		}
		var obj = inpList[3].parentNode.nextElementSibling.nextElementSibling;
		btn[1].onclick = function(){
			if (a<4 || a>10){
				inpList[0].nextElementSibling.innerHTML="用户名位数不对";
			}
			if (b<6 || b>12){
				inpList[1].nextElementSibling.innerHTML="密码位数不对";
			}
			if (inp1 != inp2){
				inpList[2].nextElementSibling.innerHTML="确认密码有误";
			}
			if (a>=4 && a<=10 && b>=6 && b<=12 && inp1==inp2) {
					if (str1==str2 && str1 != ""){
						alert("注册成功，已登录！");	
						window.location.href="zsd(登陆后主网页).html";
					}
					else {
						obj.innerHTML = "验证码错误";
					}
				}
			}