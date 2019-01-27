import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Ad-Hover.css'
class AdHover extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (          
                <div className='ad-hover'>
                <p>sdasda</p>
                <p>ada</p>
                <p>ada</p><button></button>
                </div>
          
        )
    }
}

export default AdHover