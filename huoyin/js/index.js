   $("#danru").fadeIn(2000);
   
   window.onscroll = function() { //滚动条滚动事件
       	var heights = document.documentElement.scrollTop || document.body.scrollTop; //360和火狐兼容
       	if(parseInt(heights) > 800) {//顶部距离大于800显示按钮
       		document.getElementById("block").style.display = "block";
       	}
       	if(parseInt(heights) < 800) {
       		document.getElementById("block").style.display = "none";
       	}
       }
       document.getElementById("block").onclick = function() {//返回顶部
       	time = setInterval('gun()',10);
       }
       
       function gun() {//滚动
       	var hg = document.body.scrollTop || document.documentElement.scrollTop;
       	if(hg == 0) {
       		clearInterval(time);
       	}
       	document.documentElement.scrollTop = document.documentElement.scrollTop - 30; //火狐浏览器
       	document.body.scrollTop = document.body.scrollTop - 30; //360浏览器	
       }
         var bz = document.getElementsByClassName("bz");//点击显示大图
         for(i = 0; i < bz.length; i++) {
         	bz[i].onclick = function() {
         		arr = this.src.split("/");
         		var name = arr[5];
         		var html = '<img width="100%" height="100%" src="img/' + name + '" />';
         		var imgs = document.getElementById("datu-block");
         		imgs.innerHTML = html;
         		document.getElementById("dt").style.display = "block";
         	}
         }
         document.getElementById("close").onclick = function() {//关闭大图
         	document.getElementById("dt").style.display = "none";
         }


