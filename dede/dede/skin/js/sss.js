/*new Marquee(
{
	MSClass	  : ["productslist","newproducts"],
	Direction : 2,
	Step	  : 0.3,
	Width	  : 940,
	Height	  : 210,
	Timer	  : 20,
	DelayTime : 2000,
	WaitTime  : 0,
	ScrollStep: 158,
	SwitchType: 0,
	AutoStart : true
});*/


var MarqueeDiv2Control=new Marquee("newproducts");		//箭头控制滚动方向、加速及鼠标拖动实例
MarqueeDiv2Control.Direction="left";
MarqueeDiv2Control.Step=1;
MarqueeDiv2Control.Width=1000;
MarqueeDiv2Control.Height=180;
MarqueeDiv2Control.Timer=50;
MarqueeDiv2Control.ScrollStep=1;				//若为-1则禁止鼠标控制实例
MarqueeDiv2Control.Start();
MarqueeDiv2Control.BakStep=MarqueeDiv2Control.Step;
$("#LeftButton2")[0].onmouseover=function(){MarqueeDiv2Control.Direction=2};
$("#LeftButton2")[0].onmouseout=$("#LeftButton2")[0].onmouseup=function(){MarqueeDiv2Control.Step=MarqueeDiv2Control.BakStep};
$("#LeftButton2")[0].onmousedown=$("#RightButton2")[0].onmousedown=function(){MarqueeDiv2Control.Step=MarqueeDiv2Control.BakStep+3};
$("#RightButton2")[0].onmouseover=function(){MarqueeDiv2Control.Direction=3};
$("#RightButton2")[0].onmouseout=$("#RightButton2")[0].onmouseup=function(){MarqueeDiv2Control.Step=MarqueeDiv2Control.BakStep};