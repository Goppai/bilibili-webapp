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
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-home'>
                          <a href="">
                          <div>
                            <span>
                                
                            </span>
                              </div>
                          <div>
                              首页
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                 111
                              </span>
                              </div>
                          <div>
                              动画
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  119
                              </span>
                              </div>
                          <div>
                              番剧
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  999+
                              </span>
                              </div>
                          <div>
                              国创
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  678
                              </span>
                              </div>
                          <div>
                              音乐
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  999+
                              </span>
                              </div>
                          <div>
                              舞蹈
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  452
                              </span>
                              </div>
                          <div>
                              游戏
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  234
                              </span>
                              </div>
                          <div>
                              科技
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  532
                              </span>
                              </div>
                          <div>
                              数码
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  199
                              </span>
                              </div>
                          <div>
                              生活
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  666
                              </span>
                              </div>
                          <div>
                              鬼畜
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  999+
                              </span>
                              </div>
                          <div>
                              时尚
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  999+
                              </span>
                              </div>
                          <div>
                              广告
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  344
                              </span>
                              </div>
                          <div>
                              娱乐
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  435
                              </span>
                              </div>
                          <div>
                              影视
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li Top-thirteen header-nav-ul-li-others'>
                          <a href="">
                          <div>
                              <span>
                                  342
                              </span>
                              </div>
                          <div>
                              放映厅
                          </div>
                          </a>
                      </li>
                      <li className='header-nav-ul-li last-four four-first'>
                          <a href="">
                          <div>
                              <span>
                                 
                              </span>
                              </div>
                          <div>
                              专栏
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four four-second'>
                          <a href="">
                          <div>
                              <span>
                                  
                              </span>
                              </div>
                          <div>
                              直播
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four four-third'>
                          <a href="">
                          <div>
                              <span>
                                 
                              </span>
                              </div>
                          <div>
                              广场
                          </div>
                          </a>
                      </li>
                      <li  className='header-nav-ul-li last-four four-fourth'>
                          <a href="">
                          <div>
                              <span>
                                  
                              </span>
                              </div>
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