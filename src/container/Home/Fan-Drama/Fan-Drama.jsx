import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Fan-Drama.css'
import ad1 from '../../../images/ad1.jpg'
class FanDrama extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index:3
        }
    }
    render() {
        return (
            <div>
                <div className='fan-drama clearfix'>
              <div className='fan-drama-block'>
                 <div className="fan-drama-header clearfix">
                    <div className='fan-drama-header-img'></div>
                    <a href="">番剧</a>
                    <nav>
                        <ul>
                            <li className={this.state.index === 1?'fan-drama-li':''} onClick={()=>{this.setState({index:1})}} >最新</li>
                            <li className={this.state.index === 2?'fan-drama-li':''} onClick={()=>{this.setState({index:2})}}>一</li>
                            <li className={this.state.index === 3?'fan-drama-li':''} onClick={()=>{this.setState({index:3})}}>二</li>
                            <li className={this.state.index === 4?'fan-drama-li':''} onClick={()=>{this.setState({index:4})}}>三</li>
                            <li className={this.state.index === 5?'fan-drama-li':''} onClick={()=>{this.setState({index:5})}}>四</li>
                            <li className={this.state.index === 6?'fan-drama-li':''} onClick={()=>{this.setState({index:6})}}>五</li>
                            <li className={this.state.index === 7?'fan-drama-li':''} onClick={()=>{this.setState({index:7})}}>六</li>
                            <li className={this.state.index === 8?'fan-drama-li':''} onClick={()=>{this.setState({index:8})}}>日</li>
                        </ul>
                    </nav>
                   <div className='fan-drama-schedule'>
                       新番时间表
                       <span></span>
                   </div>
                 </div>
                 <div className="fan-drama-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                   王者？归来
                                            </p>
                                            <p>
                                                   更新至
                                                <span>
                                                    5话
                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                   小绿和小蓝
                                            </p>
                                            <p>
                                                    asdas
                                                <span>
                                                    1话
                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                <div>
                                        <a href="">
                                            <img src={ad1} alt=""/>
                                            <div className='fan-drama-container-p'>
                                            <p>
                                                    asdasd
                                            </p>
                                            <p>
                                                    asdas
                                                <span>

                                                </span>
                                            </p>
                                            </div>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     </div>
              </div>
              <div className="fan-drama-ranking">
                <div className="fan-drama-ranking-header">
                   排行
                    <span>
                        三日<i></i>
                    </span>
                </div>
                <div className='fan-drama-ranking-container'>
                    <nav>
                        <ul>
                            <li>
                                <span className='fan-drama-ranking-container-pink-span'>1</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span className='fan-drama-ranking-container-pink-span'>2</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span className='fan-drama-ranking-container-pink-span'>3</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span>4</span><span>我从未等到的秃头的程序员的归来</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span>5</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span>6</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                            <li>
                                <span>7</span><span>我从未等到的秃头的</span><span>更新至第19话</span>
                            </li>
                           
                            
                             
                        </ul>
                    </nav>
                    <div className='fan-drama-ranking-container-footer'>查看更多<span></span></div>
              </div>
            </div>
            </div>
            </div>
        )
    }
}

export default FanDrama;