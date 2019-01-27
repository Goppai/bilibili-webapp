import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Ad-Promotion-Block.css'
import aa from '../../../../images/ad1.jpg'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <div className="ad-promotion-block">
                <div className="ad-promotion-left">
                    <div className="ad-promotion-first-header">
                    推广
                    </div>
                 <div className='ad-promotion-container'>
                    <div className="ad-promotion-container-div">
                     <a href="">
                        <img src={aa} alt=""/>
                        <h2>adasdasd</h2>
                     </a>
                    </div>
                    <div className="ad-promotion-container-div">
                    <a href="">
                        <img src={aa} alt=""/>
                        <h2>asdasdasdas</h2>
                     </a>
                    </div>
                    <div className="ad-promotion-container-div">
                    <a href="">
                        <img src={aa} alt=""/>
                        <h2>asdasdas</h2>
                     </a>
                    </div>
                    <div className="ad-promotion-container-div">
                    <a href="">
                        <img src={aa} alt=""/>
                        <h2>asdasd</h2>
                     </a>
                    </div>
                    <div className="ad-promotion-container-div">
                    <a href="">
                        <img src={aa} alt=""/>
                        <h2>asdasdas</h2>
                     </a>
                    </div>
                 </div>
                </div>
                <div className="ad-promotion-right">
                   <div className="ad-promotion-last-header">
                  <span>在线人数：3500272</span><span>最新投稿：3676533</span>
                   </div> 
                   <div className="ad-promotion-last-div">
                   <img src={aa} alt=""/>
                   </div>
                </div>      
              </div>
            </div>
        )
    }
}

export default Ad