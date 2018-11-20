import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: '',
            token: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this,"userName")}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button onClick={this.sendCodeHandle.bind(this)}>发送验证码</button>
                    <input type="text" placeholder="输入验证码" onChange={this.changeHandle.bind(this,"userToken")}/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
    changeHandle(prop,e) {
        if(prop==="userName"){
            this.setState({
                username: e.target.value
            })
        }
         if(prop==="userToken"){
            this.setState({
                userToken: e.target.value
            })
        }
    }
    sendCodeHandle(){
        this.setState({
                token: Math.random().toString().slice(6)
        })
    }
    clickHandle() {
        const username = this.state.username
        const userToken= this.state.userToken+this.state.token
        const loginHandle = this.props.loginHandle
        loginHandle(username,userToken);
    }
}

export default Login