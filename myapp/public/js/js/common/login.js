function Login(container){
    this.container = container
    this.init()
}


Login.template = `

        <form>
            <div class="title">卡姿兰后台系统</div>
            <input type="text" class="form-control border input" id="exampleInputEmail1" placeholder="身份证号码/手机号">
            <input type="password" class="form-control border" id="exampleInputPassword1" placeholder="密码">
            <p id="pageToggle">已有账号，立即登录</p>
            <button type="submit" class="btn  btn-primary border">注册</button>
        </form>
    
`


Login.prototype = {
    init:function(){
        this.createPage()
        this.pageToggle()
    },
    createPage:function(){
        this.container.html(" ")
        this.container.append(Login.template)
    },
    pageToggle:function(){
        this.container.find("#pageToggle").on("click",this.handleToggleCb.bind(this))
    },
    handleToggleCb(){
        new Page().createPage(true)
    }
}