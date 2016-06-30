$(function () {
    $("#fullpage").fullpage({
        // 与顶部的距离
        paddingTop: '60px',
        // 固定的元素 使在使用fullpage时候销毁该元素的fullpage效果
        fixedElements: '#header',
        // 显示项目导航
        navigation: true,
        // 定义锚链接
        anchors: ['百度舆情', '领先', '全面', '专业'],
        // 项目导航的tip
        navigationTooltips: ['百度舆情', '领先', '全面', '专业'],
        // showActiveTooltip:true,
    });
    $('.btn-arrow').on('click', function () {
        // 向下滚动
        $.fn.fullpage.moveSectionDown();
    })
})