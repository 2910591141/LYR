//沙箱模式
(function () {
    //外接js文件一般写在head中，此时DOM树还没有加载，所以需要将代码写到入口函数中
    $(function () {
        jeDate('#testico', {
            trigger: 'click',
            theme: { bgcolor: "#00A680", pnColor: "#00DDAA" },//绿色主题
            format: "YYYY-MM-DD",
            isinitVal: true,
        });

        /* 初始化选项 */
        /* 3.初始化 */
        var E = window.wangEditor;
        //把创建的editor作为全局变量
        window.editor = new E('#editor');
        // 或者 var editor = new E( document.getElementById('editor') )
        editor.create();
    });

})();