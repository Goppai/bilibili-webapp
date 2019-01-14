import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Header-Nav.css'
class HeaderNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            <div className='header-nav'>
                <nav>
                    <ul>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              首页
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              动画
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              番剧
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              国创
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              音乐
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              舞蹈
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              游戏
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              科技
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              数码
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              生活
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              鬼畜
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              时尚
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              广告
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              娱乐
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              影视
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen'>
                          <a href="">
                          <div>
                              放映厅
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li last-four'>
                          <a href="">
                          <div>
                              专栏
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four'>
                          <a href="">
                          <div>
                              直播
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four'>
                          <a href="">
                          <div>
                              广场
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four'>
                          <a href="">
                          <div>
                              小黑屋
                          </div>
                          </a>
                      </li>

                    </ul>
                    
                </nav>
                <div>

                </div>
            </div>
            </div>
        )
    }
}

export default HeaderNav