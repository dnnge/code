mui.init({
  gestureConfig:{
   tap: true,
   doubletap: true,
   longtap: true,
   swipe: true,
   drag: true,
   hold:true,
   release:true
  }
});

mui('.top').on('hold','.button',function(){//顶部点击效果
	this.style.backgroundColor='#028ab8';
})
mui('.top').on('release','.button',function(){
	this.style.backgroundColor='#00b2ee';
})

$("#save").on('hold',function(){
$("#save").css("backgroundColor","#d30808");
});
$("#save").on('release',function(){
$("#save").css("backgroundColor","#0099cb");
});

$("#save").on('tap',function(){	
	var mobile=$('#text').val();
if(mobile.length<1){
mui.alert('手机号码不能为空！');
}else{
	mui.toast('开始轰炸');	
	$.ajax({type:"get",url:'',async:true});
}

})







