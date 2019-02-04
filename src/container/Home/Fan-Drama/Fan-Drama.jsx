import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Fan-Drama.css'
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
        
                     </div>
              </div>
              <div className="fan-drama-ranking">
                <div className="fan-drama-ranking-header">
                   
                </div>
                <div className='fan-drama-ranking-container'>
               
              </div>
            </div>
            </div>
            </div>
        )
    }
}

export default FanDrama;