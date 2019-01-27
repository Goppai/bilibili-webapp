import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Bili-Live.css'
import aa from '../../../images/ad1.jpg'
class BiliLive extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
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
              </div>
            </div>
            </div>
        )
    }
}

export default BiliLive