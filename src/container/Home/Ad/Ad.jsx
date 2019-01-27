import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AdCarouselBlock from './Ad-Carousel-Block/Ad-Carousel-Block'
import AdPromotionBlock from './Ad-Promotion-Block/Ad-Promotion-Block'
import AdImage from './Ad-image/Ad-Image'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <AdCarouselBlock />
              <AdPromotionBlock />
              <AdImage />
            </div>
        )
    }
}

export default Ad