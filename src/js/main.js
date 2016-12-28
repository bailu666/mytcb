requirejs.config({//从requires.js文件为根目录查找目标模块
	paths:{
		'app':'../app',
		'lunbo':'app/lunbo',
		'home':'app/home',
		'map':'app/map',

	}
})
define(['lunbo','home','map'],function(lunbo,home,map){
	lunbo()
	home()
	map()
})