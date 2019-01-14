import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header/Header'
import HeaderNav from './Header/Header-Nav/Header-Nav'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header />
                <HeaderNav />
            </div>
        )
    }
}

export default Home