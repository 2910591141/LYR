//入口函数
$(function(){
    /*
        登录功能思路:
        1.给登录按钮注册点击事件
        2.阻止默认跳转事件(表单submit会自动跳转页面)
        3.获取用户名和密码
        4.非空判断
        5.ajax发送请求
        6.处理响应结果 
        a.成功:跳转管理系统首页 
        b.失败:提醒客户
    */
    //1.给登录按钮注册点击事件
    $('.input_sub').click(function(){
        //2.阻止默认跳转事件(表单sumbit会自动跳转页面)
        e.preventDefault();
        //3.获取用户名和密码
        let username = $('.input_txt').val().trim();
        let password = $('.input_pass').val().trim();
        //4.非空判断
        if(username == '' || password == ''){
            //alert('用户名与密码不能为空');
            //使用莫泰框
            $('.modal-body>p').text('用户名与密码不能为空');
            $('#myModal').modal({keyword:true});
            //按ESC键可以关闭模态框
            return;
        };
        //5.ajax发送请求
        $.ajax({
            url:'http://localhost:8080/api/v1/admin/user/login',
            type:'get',
            dataType:'json',
            data:{
                username: username,
                password: password
            },
            success: function(backData){
                console.log(backData);
                //6.处理响应结果 
                //a.成功: 跳转管理系统首页
                //b.失败: 提示用户
                if(backData.code == 200){
                    //使用模态框
                    $('.modal-body>p').text('登录成功');
                    $('#myModal').modal({ keyboard:true });
                    $('#myModal').on('hidden.bs.modal',function(e){
                        //模态框隐事件
                        //1.将服务器返回的token存入localStorage 本地存储
                        localStorage.setItem('token',backData.token);
                        //2.跳转首页
                        window.location.href = './index.html';
                    })
                }else{
                    //msg后台的
                    alert(backData.msg);
                }
            }
        }); 
    });
});