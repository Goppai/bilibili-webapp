import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderTop from './Header-Top/Header-Top'

import './Header.css'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div className='Header'>
                <HeaderTop />
                </div>
            </div>
        )
    }
}

export default Header