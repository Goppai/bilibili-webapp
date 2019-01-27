import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ad from '../../../../images/ad.jpg'
import './Ad-Image.css'
class AdImage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <div className='ad-image'>
                  <img src={ad} alt=""/>
              </div>
            </div>
        )
    }
}

export default AdImage