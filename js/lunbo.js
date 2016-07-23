(function($){
	var _config={
			interval:2000,stepin:$.noop
		}
	$.fn.extend({lunbo:function(config){

		$.extend(_config,config)
		var ul = $(this).find('ul');
	    li = ul.find('li');
	    off = li.outerWidth(true),
	    index = 1;

	    var move = function(){
	    	// console.log(off)
	    	ul	    	
	    	.animate({marginLeft:-off},2000,function(){
	    		$(this).css('marginLeft',0)
	    	.append(ul.find(':first'))
	    	})
	    	index += 1;
	    	_config.stepin(index);
	    	if(index == li.length){
	    		index = 0;
	    	}
	    }
	   var timerid = setInterval(move,_config.interval)
	    $(this).on('mouseenter.lunbo',function(){
	    	clearInterval(timerid);
	    })

	    $(this).on('mouseleave.lunbo',function(){
	    	timerid = setInterval(move,_config.interval)
	    })
	}})
	

})(jQuery);

