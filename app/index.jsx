import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import RouterMap from './router/routerMap'
import configureStore from './store/configureStore'

// 引用并执行 redux-demo
import fn from './components/redux-demo/redux-demo.js'
//fn()

// 通用样式
import './static/css/common.less'
import './static/css/font.css'

import App from './containers/App'
// 创建 Redux 的 store 对象
const store = configureStore()


render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
     </Provider>,
    document.getElementById('root')
)
