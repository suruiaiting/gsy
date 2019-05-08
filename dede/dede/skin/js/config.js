/*
	根据页面配置模版js如果有特殊的
	
	index: 首页js
	...
	[js路径,别名,依赖js(别名)] 别名不能重复
*/
var config={
		global:[
			["/newtemplete/public/slider/jquery.slides.js","slide"],			
			["/newtemplete/Default335/js/banner.js","banner",["slide"]],		
			["/Scripts/layer/layer.min.js","layer"]
		],
		index:[			
			["/newtemplete/public/PlugInServiceOnLine.js","service"],
			["/newtemplete/public/online.js","online",["service"]],
			["/newtemplete/Default335/js/msclass.js","msclass"],
			["/newtemplete/Default335/js/sss.js","sss",["msclass"]]
		],
		about:[],
		city:[],
		contact:[],
		news:[],
		content:[],
		detail:[
			["/newtemplete/public/productdetail.js","detail"],
			["/newtemplete/public/shopping.js","shoping"]
		],
		info:[],
		message:[
			["/newtemplete/public/messageValid.js","msg"]
		],
		article:[
			["/newtemplete/public/articleinfo.js","article"]
		],
		products:[]
	};