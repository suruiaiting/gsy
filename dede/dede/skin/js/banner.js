$(function() {
	var width = $(window).width();
  $('.banner').slidesjs({
    width: width,
    height: 400,
    navigation:false,
    play: {
      active: true,
      auto: true,
      interval: 4000,
      swap: false,
      pauseOnHover:true,
      restartDelay: 2500
    }
  });
});