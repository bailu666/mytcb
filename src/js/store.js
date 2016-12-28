$('#t1').on("mouseover",function(){
	$('.hover').slideDown()
})
$('.hover').on('mouseout',function(){
	$(this).slideUp()
})
var sp = $('#search span');
var txt = $('#txt')
var arr = ['上门安装调试路由器','系统安装','笔记本除尘清灰','手机刷机','打印机维修','服务器检测'];
sp.each(function(index){
		sp.eq(index).on('click',function(){
//			console.log(txt.eq(index))
			$(this).css('background','mediumseagreen').siblings().css('background','');
			txt.attr('placeholder',arr[index])
		})		
})
//console.log(data);
