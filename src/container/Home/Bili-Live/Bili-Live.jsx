import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Bili-Live.css'
import aa from '../../../images/ad1.jpg'
import ad3 from '../../../images/ad3.jpg'
import ad5 from '../../../images/ad5.jpg'
import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import sp from '../../../images/sp.png'
import wh from '../../../images/wh.png'
class BiliLive extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index:3
        }
    }
    
    render() {
        let input;
      
        return (
            <div>
            <div className='bili-live clearfix'>
              <div className='bili-now-live'>
                 <div className="bili-live-header clearfix">
                    <div></div>
                    <a href="">正在直播</a>
                    <span>当前共有<em>10635</em>个在线直播</span>
                    <a href=""><span></span><span>233秒居然能做这些</span></a>
                 </div>
                 <div className="bili-live-container">
                 <table>
                 <tbody>
                     <tr>
                         <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                     </tr>
                     <tr>
                     <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                        <td> 
                            <div className="bili-live-td-div">
                              <a href="">
                                 <img src={aa} alt=""/>
                                     <h2>asdasdasdas</h2>
                              </a>
                            </div>
                        </td>
                     </tr>
                     </tbody>
                     </table>
                     </div>
              </div>
              <div className="bili-live-carousel">
                <div className="bili-live-carousel-header">
                    <div className={this.state.index === 1?'bili-live-carousel-tab bili-live-on':'bili-live-carousel-tab'} onClick={()=>{this.setState({index:1})}} >
                    直播排行
                    </div>
                    <div className={this.state.index === 2?'bili-live-carousel-tab bili-live-on':'bili-live-carousel-tab'} onClick={()=>{this.setState({index:2})}}   >
                    关注的主播
                    </div>
                    <div className={this.state.index === 3?'bili-live-carousel-tab bili-live-on':'bili-live-carousel-tab'} onClick={()=>{this.setState({index:3})}}   >
                    为你推荐
                    </div>
                </div>
                <div className='bili-live-carousel-container'>
                <Carousel auto loop  widgets={[IndicatorDots]} className='bili-live-carousel-main'>
                    <div className='carousel-item'><a href=""><img src={ad3} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad5} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad3} alt=""/></a></ div >
                  </ Carousel >
                </div>
                <div className="small-video">
                   <a href=""><img src={sp} alt=""/></a>
                   <a href=""><img src={wh} alt=""/></a>
                </div> 
              </div>
            </div>
            </div>
        )
    }
}

export default BiliLive