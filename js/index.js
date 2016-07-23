
$(function(){
	$("#fullpage").fullpage({
		paddingTop:'60px',
		fixedElements:'#header',
		navigation:true,
		anchors:['百度舆情','领先','全面','专业'],
		navigationTooltips:['百度舆情','领先','全面','专业'],
		// showActiveTooltip:true,
	});
	$('.btn-arrow').on('click',function(){
		$.fn.fullpage.moveSectionDown();
	})
})