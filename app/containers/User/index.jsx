import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfoComponent from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userInfo = this.props.userInfo
        return (
            <div>
                <Header title="用户主页" backRouter="/home"/>
                <UserInfoComponent username={userInfo.username} city={userInfo.cityName}/>
                <OrderList username={userInfo.username}/>
            </div>
        )
    }
    componentDidMount() {
        // 如果未登录，跳转到登录页面
        if (!this.props.userInfo.username) {
            hashHistory.push('/Login')
        }
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)