import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouterMap from './router/routerMap'

// 引用并执行 redux-demo
import fn from './components/redux-demo/redux-demo.js'
fn()

// 通用样式
import './static/css/common.less'

import App from './containers/App';

render(
    <RouterMap history={hashHistory}/>,
    document.getElementById('root')
)
