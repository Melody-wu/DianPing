import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoStateManage from '../actions/userinfo'

class App extends React.Component {
    constructor(props,context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        console.log(this.props.history);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
           <div>
                {
                    this.state.initDone?
                    this.props.children:<div>正在加载中。。。</div>
                }
           </div>
        )
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         initDone: true
        //     })
        // },2000)
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoState.update({
            cityName: cityName
        })
        // 更改状态
        this.setState({
            initDone: true
        })
    }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        //console.log(this.state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
       userInfoState: bindActionCreators(userInfoStateManage, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)