function Register(container) {
    this.container = container
    this.init()
}


Register.template = `

        <form id="register">
            <div class="title">卡姿兰后台系统</div>
            <input type="text" class="form-control border input" id="register_username" placeholder="身份证号码/手机号">
            <input type="password" class="form-control border" id="register_password" placeholder="密码">
            <p id="pageToggle">立即注册</p>
            <button type="submit" class="btn  btn-primary border">登录</button>
        </form>
    
`


Register.prototype = {
    init: function () {
        this.createPage();
        this.pageToggle();
        this.submit();
    },
    createPage: function () {
        this.container.html(" ")
        this.container.append(Register.template)
    },
    pageToggle:function(){
        this.container.find("#pageToggle").on("click",this.handleToggleCb.bind(this))
    },
    handleToggleCb(){
        new Page().createPage(false)
    },
    submit:function(){
        this.container.find("#register").on("submit",this.handleSubmitCb.bind(this))
    },
    handleSubmitCb(e){
       e.preventDefault()
        var username = this.container.find("#register_username").val();
        var password = this.container.find("#register_password").val()
        // console.log(username,password)
       
        $.ajax({
            type:"post",
            url:"/users/register",
            data:{
                username,
                password
            },
            success:this.handleSubmitSuccess.bind(this),
           
        })
    },
    handleSubmitSuccess(data){
        console.log(data)
    }
}