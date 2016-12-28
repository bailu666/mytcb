var baseURL = "http://192.168.1.155:4005/";
var n = 4;
var data = null;
function get4(){
	var xhr1 = createXHR();
	xhr1.open("get",baseURL+n);
	xhr1.send(null);	
	xhr1.onreadystatechange = function(){
		if(xhr1.readyState == 4){//判断服务器状态
			if(xhr1.status == 200 || xhr1.status == 304){//判断状态码
				data = JSON.parse(xhr1.responseText)
//				console.log(data);
				var arr = data.product;
				for(var i = 0; i< arr.length;i++){
					var dl = $('<dl><dt><img src ='+arr[i].product_img+'></dt><dd class="zi"><a href = "#">'+arr[i].product_name+'</a><br/><span>服务内容：'+arr[i].tag_name+'</span></dd><dd class="money">￥<span>'+arr[i].product_price+'</span></dd><dd class = "dian"><a href = "#"><img src = "img/dpym_10.png"/></a></dd></dl>');
					dl.insertBefore($('#lan .fan'));
				}
			}
		}
	}
}
get4();


