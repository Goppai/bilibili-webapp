import React from 'react'
import ReactDom from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Ad-Carousel-Block.css'
import Carousel from 're-carousel'
import AdHover from './Ad-Hover'
import IndicatorDots from './indicator-dots'
import ad1 from '../../../../images/ad1.jpg'
import ad2 from '../../../../images/ad2.jpg'
import ad3 from '../../../../images/ad3.jpg'
import ad4 from '../../../../images/ad4.jpg'
import ad5 from '../../../../images/ad5.jpg'
import ad_hove1 from '../../../../images/ad-hover1.webp'
import Image from 'react-image-webp'

class AdCarouselBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 1
        }
    }
   
    render() {
        return (
              <div className="ad-carousel-block">
                 <div className='ad-carousel-block-container clearfix'>
                  <div className='ad-carousel-container-swipe'>
                  <Carousel auto loop widgets={[IndicatorDots]} className='carousel'>
                    <div className='carousel-item'><a href=""><img src={ad3} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad5} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad3} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad3} alt=""/></a></ div >
                    <div className='carousel-item'><a href=""><img src={ad5} alt=""/></a></ div >
                    </ Carousel >


                  </div>
                  <div className="ad-carousel-container-block">
                    <div className='carousel-top-four' >
                        <AdHover />
                        <a href="">
                            <Image webp={ad_hove1}/>
                            <p>

                            </p>
                        </a>
                    </div>
                    <div className='carousel-top-four'>
                    <AdHover />
                       <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-top-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-top-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-bottom-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-bottom-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-bottom-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                    <div className='carousel-bottom-four'>
                    <AdHover />
                    <a href="">
                            <Image webp={ad_hove1}/>
                            <p>
                                
                            </p>
                        </a>
                    </div>
                  </div>

                 </div>
              </div>
        )
    }
}

export default AdCarouselBlock;